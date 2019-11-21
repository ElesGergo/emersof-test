import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "app-search-input",
  templateUrl: "./search-input.component.html",
  styleUrls: ["./search-input.component.css"]
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Output() search: EventEmitter<string> = new EventEmitter();
  searchControl: FormControl;
  searchControlSub: Subscription;
  setSearchControl() {
    this.searchControl = new FormControl(null);
    this.searchControlSub = this.searchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((searchTerm: string) => {
        this.search.emit(searchTerm);
      });
  }

  ngOnInit(): void {
    this.setSearchControl();
  }
  ngOnDestroy(): void {
    this.searchControlSub.unsubscribe();
  }
}
