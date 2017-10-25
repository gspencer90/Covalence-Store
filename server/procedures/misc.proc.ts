import {row, rows } from '../config/db';

export function getMisc(): Promise<Array<models.IProduct>> {
    return rows("GetAllMisc");
  }

  export function read(id: number): Promise<models.IProduct> {
    return row("GetProduct", [id]);
  }