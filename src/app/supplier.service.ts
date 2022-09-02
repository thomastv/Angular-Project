import { Injectable } from '@angular/core';
import { Supplier } from './models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  suppliersList: Supplier[]

  constructor() {
    this.suppliersList = [
      new Supplier(1, "Bangalore, India", "Supplier 1"),
      new Supplier(2, "Hyderabad, India", "Supplier 2"),
      new Supplier(3, "Sydney, Australia", "Supplier 3"),
      new Supplier(4, "Texas, USA", "Supplier 4"),
    ]
  }

  getSuppliers(): Supplier[] {
    return this.suppliersList
  }

  addSupplier(id: number, location: string, name: string) {
    var newSupplier = new Supplier(id, location, name)
    this.suppliersList.push(newSupplier)
  }

  updateSupplier(oldUser: Supplier, id: number, name: string, location: string) {
    oldUser.name = name
    oldUser.location = location
  }

  deleteSupplier(id: number) {
    var supplier = this.suppliersList.find(supplier => supplier.id == id)
    var index = this.suppliersList.indexOf(supplier!)
    this.suppliersList.splice(index, 1)
  }

}
