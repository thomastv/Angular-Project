import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../models/product';
import { Supplier } from '../models/supplier';
import { ProductService } from '../product.service';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {

  @Input() product: Product | undefined
  supplier: Supplier | undefined

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productsService: ProductService, private supplierService: SupplierService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      console.log(param)
      let id = param['id']
      console.log(id)
      this.productsService.getProductByIdHttp(id).subscribe(product => {
        this.product = product
        this.supplierService.getSupplierByIdHttp(product.supplier_id).subscribe(supplier => { this.supplier = supplier })
      })

    })
  }

}
