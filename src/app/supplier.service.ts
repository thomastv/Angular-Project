import { Injectable } from '@angular/core';
import { Supplier } from './models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  supplierArr:Supplier[] = [];
  constructor() {
    this.supplierArr= [
      new Supplier(1,"Thomas",988643543),
      new Supplier(2,"Jijo",9884324543),
      new Supplier(3,"Mushtaq",924242543),
    ]
   }

   getSuppliers(){
    return this.supplierArr;
   }
   getSupplierById(id:number){
     return this.supplierArr.find((element) => element.supplier_id==id)!
   }
   addSupplier(supplier:Supplier){
    this.supplierArr.push(supplier);
   }
}
