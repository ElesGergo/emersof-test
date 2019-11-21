import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, from } from "rxjs";
import { TestData } from "../models/TesData";
import { SearchObject } from "../models/serachObject";
import { map, filter, switchMap, toArray } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  constructor(private _http: HttpClient) {}

  getTest(searchObject: SearchObject): Observable<TestData[]> {
    return this._http.get<TestData[]>("api/heroes").pipe(
      switchMap(result => from(result)),
      filter((item: TestData) => {
        let sTerm = searchObject.searchTerm.toLowerCase();
        let equalLengtht = item.title
          .toLocaleLowerCase()
          .substr(0, sTerm.length);
        if (sTerm === "") {
          return true;
        }
        if (equalLengtht === sTerm) {
          return true;
        }
        return false;
      }),
      filter((item: TestData) => {
        if (!searchObject.filter) {
          return true;
        }
        return item.type === searchObject.filter ? true : false;
      }),
      toArray(),
      map(res => {
        sortResult(res, searchObject.sortType);
        return res;
      })
    );
  }
}
function sortResult(result: TestData[], sortType: string) {
  let sortParams;
  if (!sortType) {
    return;
  }
  if (sortType === "asc") {
    sortParams = [-1, 1];
  } else {
    sortParams = [1, -1];
  }
  result.sort(function(a, b) {
    let titleA = a.title.toLowerCase(),
      titleB = b.title.toLowerCase();
    if (titleA < titleB) return sortParams[0];
    if (titleA > titleB) return sortParams[1];
    return 0;
  });
}
