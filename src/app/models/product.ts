export class Product {
    id: number
    name: string
    price: number
    supplier_id: number
    img_path: string

    constructor(id: number, name: string, price: number, supplier_id: number, img_path: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.supplier_id = supplier_id;
        this.img_path = img_path;
    }

    
}