import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  DoCheck,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-search-drop-down",
  templateUrl: "./search-drop-down.component.html",
  styleUrls: ["./search-drop-down.component.scss"]
})
export class SearchDropDownComponent {
  @Input() title: string;
  @Input() dropItems: Array<any>;
  @Output() selected: EventEmitter<string> = new EventEmitter();
  selectedState: string;
  constructor() {}

  select(value: string): void {
    this.selectedState = this.dropItems.find(
      item => item.value === value
    ).title;
    this.selected.emit(value);
  }
}
