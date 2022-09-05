import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Supplier } from './models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  suppliersList: Supplier[]
  baseUrl: string

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000'
    this.suppliersList = [
      // new Supplier(1, "Bangalore, India", "Supplier 1"),
      // new Supplier(2, "Hyderabad, India", "Supplier 2"),
      // new Supplier(3, "Sydney, Australia", "Supplier 3"),
      // new Supplier(4, "Texas, USA", "Supplier 4"),
    ]
  }

  getSuppliers(): Supplier[] {
    return this.suppliersList
  }

  getSuppliersHttp(): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>(this.baseUrl + '/suppliers').pipe(retry(1), catchError(this.httpError))
  }



  addSupplier(id: number, location: string, name: string) {
    var newSupplier = new Supplier(id, location, name, "")
    this.suppliersList.push(newSupplier)
  }

  addSupplierHttp(id: number, location: string, name: string) {
    var newSupplier = new Supplier(id, location, name, "")
    console.log("Adding")
    return this.httpClient.post<Supplier>(this.baseUrl + '/suppliers', newSupplier)
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

  httpError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    }
    else {
      msg = `Error Code:${error.status}\nMessafe:${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }

}
