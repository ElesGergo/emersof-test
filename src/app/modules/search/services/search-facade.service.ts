import { Injectable } from "@angular/core";
import { TestData } from "../models/TesData";
import { Observable, BehaviorSubject } from "rxjs";
import { SearchState } from "../models/SearchState";
import {
  map,
  switchMap,
  debounceTime,
  distinctUntilChanged
} from "rxjs/operators";
import { SearchObject, SortType } from "../models/SerachObject";
import { SearchService } from "./search.service";

@Injectable({
  providedIn: "root"
})
export class SearchFacade {
  private _state = new SearchState();
  private dispacher = new BehaviorSubject<SearchState>(this._state);
  private state$ = this.dispacher.asObservable();

  mediaItems$: Observable<TestData[]> = this.state$.pipe(
    map(state => state.mediaItems),
    distinctUntilChanged()
  );
  searchCriteria$: Observable<SearchObject> = this.state$.pipe(
    map(state => state.criteria),
    distinctUntilChanged()
  );
  sortType$: Observable<SortType> = this.state$.pipe(
    map(state => state.criteria.sortType),
    distinctUntilChanged()
  );

  constructor(private searchService: SearchService) {
    this.searchCriteria$
      .pipe(switchMap(criteria => {
        console.log(criteria);
        return this.searchService.getTest(criteria)}))
      .subscribe(mediaItems => {
        this.dispacher.next((this._state = { ...this._state, mediaItems }));
      });
  }

  updateSearchTerm(searchTerm$: Observable<string>) {
    searchTerm$
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(term => {
        console.log(term);
        const criteria = { ...this._state.criteria, searchTerm: term };
        this.dispacher.next(
          (this._state = {
            ...this._state,
            criteria
          })
        );
      });
  }

  updateCriteria({ sortType, filter }) {
    let criteria;
    if (sortType) {
      criteria = { ...this._state.criteria, sortType };
    }
    if (filter) {
      criteria = { ...this._state.criteria, filter };
    }
    this.dispacher.next((this._state = { ...this._state, criteria }));
  }
  clearFilter() {
    this._state = new SearchState();
    console.log(this._state);

    this.dispacher.next(this._state);
  }
}
