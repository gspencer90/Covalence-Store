import { row, rows, empty } from "../config/db";

export function all() {
  return rows("GetAllProducts");
}

export function read(id: number): Promise<models.IProduct> {
  return row("GetProduct", [id]);
}

export function getCategory()
 {
  return rows("GetAllApparel");
}
