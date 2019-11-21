import { SearchObject } from "./SerachObject";
import { TestData } from "./TesData";

export class SearchState {
  criteria: SearchObject = {
    searchTerm: "",
    filter: "all",
    sortType: "asc"
  };
  mediaItems: TestData[] = [];
}
