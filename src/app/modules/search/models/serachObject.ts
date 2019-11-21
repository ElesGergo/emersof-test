export interface SearchObject {
  searchTerm: string;
  filter?: string;
  sortType?: SortType;
}
export type SortType = "asc" | "dsc";
