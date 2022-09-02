export class User{
    id:number;
    user_Name:string;
    password:number;
    role:string;

    constructor(id: number,uName:string, password:number,role:string){
        this.id = id;
        this.user_Name = uName;
        this.password = password;
        this.role = role;
    }
}