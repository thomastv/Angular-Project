import { Cart } from "./cart"

// id username email password role
export class User {
    id: number
    username: string
    email: string
    password: string
    role: string
    cart: Cart;
    constructor(id: number, username: string, password: string, role: string, email: string,cart: Cart) {
        this.id = id
        this.username = username
        this.email = email
        this.password = password
        this.role = role
       this.cart = cart;
    }

}