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

<<<<<<< HEAD
export function newPurchase( 
=======
export function newPurchase(
>>>>>>> 95e40a882765066973d4ba77899072753172a53a
    price: number, 
    transid: number
) {
    return row("NewPurchase", [price, transid]);
}