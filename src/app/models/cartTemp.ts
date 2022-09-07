import { CartItem } from "./cartItem";
import { Product } from "./product";
import { ProductTemp } from "./productTemp";

export class CartTemp {
    id: number;
    products: ProductTemp[] =[]
    constructor(id: number) {
        this.id = id;
    }


}
