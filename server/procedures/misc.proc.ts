import {rows, row, empty } from "../config/db";

export function all(){
    return rows('GetAllMisc');
}

export function read(id:number){
    return row('GetMisc',[id]);
}