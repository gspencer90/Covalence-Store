import { row, rows, empty } from "../config/db";

export function all() {
  return rows("GetAllProducts");
}

export function read(id: number): Promise<models.IProduct> {
  return row("GetProduct", [id]);
}

export function getCategory(
  categoryid: number
): Promise<Array<models.IProduct>> {
  return rows("GetCategory", [categoryid]);
}
