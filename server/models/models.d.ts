declare namespace models {
    interface IUser {
        id: number,
        firstname: string,
        lastname: string, 
        email: string,
        password: string,
        role: string;
    }
    interface ICategory {
        id: number,
        name: string,
        
    }
    interface IProduct {
        id: number,
        name: string,
        description: string;
    }
    interface IPurchase {
        id: number,
        price: number,
        transid: string;
    }
}