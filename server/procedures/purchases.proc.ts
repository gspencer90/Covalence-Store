import { row, rows, empty } from "../config/db";

export function read(id: number): Promise<models.IPurchase> {
    return row('GetPurchase', [id]);
}

export function update(id: number, price: number, transid: number): Promise<void> {
    return empty('UpdatePurchase', [id, price, transid]);
}

export function destroy(id: number): Promise<void> {
    return empty('DeleteTrans', [id]);
}

export function newPurchase(
    id: number, 
    price: number, 
    transid: number
) {
    return row("NewPurchase", [id, price, transid]);
}