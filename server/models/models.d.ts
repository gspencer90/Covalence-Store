declare namespace models {
    interface IProduct {
        id: number,
        name: string,
        imageurl: string,
        price: number,
        description: string,
        categoryid: number;
    }
    interface IPurchase {
        id: number,
        price: number,
        transid: string;
    }
}