import { Supplier } from "./supplier";
import { SupplierTemp } from "./supplierTemp";

export class ProductTemp {
    id: number
    name: string
    price: number
    suppliers:SupplierTemp[];

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.suppliers  = [];
    }

    
}