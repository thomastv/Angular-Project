import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {

  @Input() product: Product | undefined

  constructor(private activatedRoute : ActivatedRoute,private productService:ProductService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      console.log(id);
      this.productService.getProductByIdHttp(id).subscribe(product => {
        this.product = product;
      })
    })
  }

}
