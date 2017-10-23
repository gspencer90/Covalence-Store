declare namespace models {
    interface IUser {
        id: number,
        firstname: string,
        lastname: string, 
        email: string,
        password: string,
        role: string;
    }
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