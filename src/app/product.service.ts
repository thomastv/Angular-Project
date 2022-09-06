import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsArray: Product[] = []
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  baseUrl: string


  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000'
    this.productsArray = [
      // new Product(1, "Laptop", 20000, 1, "assets/images/laptop.jpg"),
      // new Product(2, "USB", 200, 2, "assets/images/usb.jpg"),
      // new Product(3, "Mobile", 15000, 3, "assets/images/mobile.jpg"),
      // new Product(4, "Cable", 500, 4, "assets/images/cable.jpg"),
    ]
  }

  getProducts(): Product[] {
    return this.productsArray;
  }

  getProductsHttp(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + '/products').pipe(retry(1), catchError(this.httpError))
  }

  addProduct(id: number, name: string, price: number, supplier_id: number, image_path: string) {
    var newProduct = new Product(id, name, price, supplier_id, image_path)
    this.productsArray.push(newProduct)

  }

  addProductHttp(id: number, name: string, price: number, supplier_id: number, image_path: string) {
    var newProduct = new Product(id, name, price, supplier_id, image_path)
    console.log(newProduct)
    return this.httpClient.post<Product>(this.baseUrl + '/products/', newProduct).pipe(retry(1), catchError(this.httpError))
  }

  updateProduct(oldProduct: Product, id: number, name: string, price: number, supplier_id: number, image_path: string) {
    oldProduct.id = id
    oldProduct.name = name
    oldProduct.price = price
    oldProduct.supplier_id = supplier_id
    oldProduct.img_path = image_path
  }
  updateProductHttp(oldProduct: Product, id: number, name: string, price: number, supplier_id: number, image_path: string) {
    oldProduct.name = name
    oldProduct.price = price
    oldProduct.supplier_id = supplier_id
    oldProduct.img_path = image_path
    return this.httpClient.put<Product>(this.baseUrl + '/products/' + id, oldProduct).pipe(retry(1), catchError(this.httpError))
  }

  deleteProduct(id: number) {
    var product = this.productsArray.find(product => product.id == id)
    var index = this.productsArray.indexOf(product!)
    this.productsArray.splice(index, 1)

  }

  deleteProductHttp(id:number){
    return this.httpClient.get<Product>(this.baseUrl + '/products/' + id).pipe(retry(1), catchError(this.httpError))
  }

  getProductById(id: number): Product | undefined {
    return this.productsArray.find(element => element.id == id)
  }

  getProductByIdHttp(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.baseUrl + '/products/' + id).pipe(retry(1), catchError(this.httpError))
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
