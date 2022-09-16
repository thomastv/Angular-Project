import { Product } from "./product"


export class Supplier {
    id: number
    name: string
    location: string
    logo_path: string
    products: Product[]


    constructor(id: number, location: string, name: string, logo_path: string) {
        this.id = id
        this.location = location
        this.name = name
        this.logo_path = logo_path
        this.products = [];
    }



}