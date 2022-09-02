import { Component, Input, OnInit } from '@angular/core';
import { Supplier } from '../models/supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrls: ['./view-supplier.component.scss']
})
export class ViewSupplierComponent implements OnInit {
  //@Input() supplierId:number = 0;
  supplierArr:Supplier[] = [];
  // currentSupplier:Supplier = new Supplier(0,"",0) 
  constructor(private supplierService:SupplierService) { 
    this.supplierArr = this.supplierService.getSuppliers();
    
  }

  ngOnInit(): void {
  }

  deleteSupplier(suppID:number){
    this.deleteSupplier(suppID);
  }
  // onShowSupplier(){
  //   this.supplierArr.forEach((supplier) =>{
  //     if(supplier.supplier_id==this.supplierId)
  //           this.currentSupplier = supplier;
  //   } )
  // }
}
