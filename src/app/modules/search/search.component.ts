import { Component, OnInit } from "@angular/core";
import { SearchService } from "./services/search.service";
import { Observable } from "rxjs";
import { DropDownInput } from "./models/DropDownInput";
import { mediaTypes } from "./util/searchOptions";
import { SearchObject } from "./models/serachObject";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  mediaTypes: Array<DropDownInput> = mediaTypes;
  data$: Observable<any>;

  searchObject: SearchObject = {
    searchTerm: "",
    filter: null,
    sortType: "asc"
  };

  constructor(private searchService: SearchService) {}
  ngOnInit(): void {
    this.triggerSearch();
  }
  triggerSearch(): void {
    this.data$ = this.searchService.getTest(this.searchObject);
  }
  onSearchTerm(sTerm: string): void {
    this.searchObject = Object.assign(this.searchObject, { searchTerm: sTerm });
    this.triggerSearch();
  }
  onOptionSelected(event: string, type: string): void {
    let searchOption;
    if (type === "filter") {
      searchOption = {
        filter: event
      };
    }
    if (type === "sortType") {
      searchOption = {
        sortType: event
      };
    }
    this.searchObject = Object.assign(this.searchObject, searchOption);
    this.triggerSearch();
  }
  changeSort(st: string): void {
    this.searchObject = Object.assign(this.searchObject, { sortType: st });
    this.triggerSearch();
  }
  clearFilter(): void {
    this.searchObject = Object.assign({
      searchTerm: "",
      filter: null,
      sortType: "asc"
    });
    this.triggerSearch();
  }
}
