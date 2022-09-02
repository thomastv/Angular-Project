import { Product } from "./product";

export class CartItem{
    product:Product;
    count:number;
    constructor(prod:Product){
        this.product = prod;
        this.count = 1;
    }
}