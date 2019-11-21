import { Component, OnInit, Input } from "@angular/core";
import { TestData } from "../../models/TesData";
import { NgbModalRef, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ResultModalComponent } from "../result-modal/result-modal.component";

@Component({
  selector: "app-result-item",
  templateUrl: "./result-item.component.html",
  styleUrls: ["./result-item.component.css"]
})
export class ResultItemComponent {
  @Input() mediaItem: TestData;
  modalReference: NgbModalRef;

  constructor(private modalService: NgbModal) {}

  get imageRoute(): string {
    return `/assets/images/icons/${this.mediaItem.type}.png`;
  }
  openDetails(): void {
    let size;
    if (this.mediaItem.type === "audio") {
      size = "md";
    }
    this.modalReference = this.modalService.open(ResultModalComponent, {
      backdrop: "static",
      size: size || "lg",
      keyboard: false,
      centered: true
    });
    this.modalReference.componentInstance.data = this.mediaItem;
  }
}
