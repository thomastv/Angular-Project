import { CartItem } from "./cartItem";
import { Product } from "./product";

export class Cart{
    cart_id:number;
    user_id:number;
    cartItems:CartItem[] = []
    constructor(c_Id:number,u_Id:number){
        this.cart_id = c_Id;
        this.user_id = u_Id;

    }
}