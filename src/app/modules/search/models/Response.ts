export interface Response<T> {
  status: "ok" | "error";
  error: [];
  data: T;
}
