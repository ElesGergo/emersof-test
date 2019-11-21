import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { TestData } from "../../models/TesData";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-result-modal",
  templateUrl: "./result-modal.component.html",
  styleUrls: ["./result-modal.component.css"]
})
export class ResultModalComponent {
  data: TestData;
  constructor(
    public activeModal: NgbActiveModal,
    public sanitizer: DomSanitizer
  ) {}
  get imageRoute(): string {
    return `/assets/images/icons/${this.data.type}.png`;
  }
}
