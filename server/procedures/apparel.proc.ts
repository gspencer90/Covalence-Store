import { row, rows, empty } from '../config/db';

export function all() {
    return rows('GetAllApparel');
}

export function read(id: number): Promise<models.IProduct> {
    return row('GetApparel', [id]);
}