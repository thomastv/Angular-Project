import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Supplier } from '../models/supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.scss']
})
export class SupplierDetailComponent implements OnInit {
  supplier : Supplier = new Supplier(0,'','','')

  constructor(private activatedRoute : ActivatedRoute,private supplierService:SupplierService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      console.log(id);
      this.supplierService.getSupplierByIdHttp(id).subscribe(supplier => {
        this.supplier = supplier;
        console.log(this.supplier.id);
      })
    })
  }

}
