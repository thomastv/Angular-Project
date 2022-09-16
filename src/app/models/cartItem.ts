import { Product } from "./product";

export class CartItem{
    //productID:number;
    product:Product;
    count:number;
    constructor(prod:Product){
        this.product = prod;
        this.count = 1;
        //this.productID = prod.id;
    }
}