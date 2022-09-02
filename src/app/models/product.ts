import { trigger } from "@angular/animations";

export class Product{
    id:number;
    pName:string;
    price:number;
    supplier_id:number;
    img_path:string;

    constructor(id: number,pName:string, price:number, supplier_id:number,img_path:string){
        this.id = id;
        this.pName = pName;
        this.price = price;
        this.supplier_id =supplier_id;
        this.img_path = img_path;
    }
}