import { row, rows, empty } from "../config/db";

export function all(): Promise<Array<models.IUser>> {
    return rows("GetUsers");
}

export function readByEmail(email: string): Promise<models.IUser> {
    return row("GetEmail", [email]);
}

export function newUser(
    firstname: string,
    lastname: string,
    email: string,
    password: string
) {
    return row("AddUser", [firstname, lastname, email, password]);
}

export function read(id: number): Promise<models.IUser> {
    return row("GetUser", [id]);
}