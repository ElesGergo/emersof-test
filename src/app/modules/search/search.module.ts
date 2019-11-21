import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "./search.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ResultModalComponent } from "./components/result-modal/result-modal.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SearchDropDownComponent } from "./components/search-drop-down/search-drop-down.component";
import { ResultItemComponent } from "./components/result-item/result-item.component";

const searchRoutes: Routes = [
  { path: "", redirectTo: "search", pathMatch: "full" },
  {
    path: "search",
    component: SearchComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(searchRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    SearchComponent,
    ResultModalComponent,
    SearchDropDownComponent,
    ResultItemComponent
  ],
  entryComponents: [ResultModalComponent]
})
export class SearchModule {}
