import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DropDownInput } from "./models/DropDownInput";
import { mediaTypes } from "./util/searchOptions";
import { SearchFacade } from "./services/search-facade.service";
import { map, take, tap, delay } from "rxjs/operators";
import { FormControl } from "@angular/forms";
import { SortType } from "./models/SerachObject";
import { TestData } from "./models/TesData";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  mediaTypes: Array<DropDownInput> = mediaTypes;
  searchControl: FormControl = new FormControl("");

  data$: Observable<TestData[]>;
  sortType$: Observable<SortType>;
  constructor(private facade: SearchFacade) {
    this.facade.updateSearchTerm(this.searchControl.valueChanges);
  }
  ngOnInit(): void {
    this.initSearchInput();
    this.data$ = this.facade.mediaItems$;
    this.sortType$ = this.facade.sortType$;
  }
  onOptionSelected(event: string): void {
    this.facade.updateCriteria({ filter: event, sortType: null });
  }
  changeSort(st: SortType): void {
    this.facade.updateCriteria({ sortType: st, filter: null });
  }
  clearFilter(): void {
    this.searchControl.reset("");
    this.facade.clearFilter();
  }

  initSearchInput(): void {
    const initialTerm$ = this.facade.searchCriteria$.pipe(
      map(c => c.searchTerm),
      take(1)
    );
    initialTerm$.subscribe(criteria => {
      this.searchControl.patchValue(criteria, { emitEvent: false });
    });
  }
}
