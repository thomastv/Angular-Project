import { CartItem } from "./cartItem";
import { Product } from "./product";

export class CartTemp {
    id: number;
    userId: number;
    amount: number;

    products: ProductTemp[]
    constructor(id: number, products: ProductTemp[], userId: number, amount: number) {
        this.id = id;
        this.products = products != null ? products : []
        this.userId = userId
        this.amount = amount
    }
}

export class ProductTemp {
    id: number
    name: string
    price: number
    suppliers: SupplierTemp[]
    img_path: string

    constructor(id: number, name: string, price: number, suppliers: SupplierTemp[], img_path: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.suppliers = suppliers;
        this.img_path = img_path;
    }
}

export class SupplierTemp {
    id: number
    location: string
    name: string
    logo_path: string


    constructor(id: number, location: string, name: string, logo_path: string) {
        this.id = id
        this.location = location
        this.name = name
        this.logo_path = logo_path
    }
}

// {id:number,cartItems:[{product:{"id": 101, "name": "Laptop", "price": "87000", "supplier_id": 1001, "img_path": "assets/images/laptop.jpg"},count:1}]}
