import { CartItem } from "./cartItem";
import { Product } from "./product";

export class Cart {
    id: number;

    cartItems: CartItem[]
    constructor(id: number, cartItems: CartItem[]) {
        this.id = id;
        this.cartItems = cartItems != null ? cartItems : []

    }


}

// {id:number,cartItems:[{product:{"id": 101, "name": "Laptop", "price": "87000", "supplier_id": 1001, "img_path": "assets/images/laptop.jpg"},count:1}]}
