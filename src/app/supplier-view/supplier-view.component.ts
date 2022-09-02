import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Supplier } from '../models/supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-view',
  templateUrl: './supplier-view.component.html',
  styleUrls: ['./supplier-view.component.scss']
})
export class SupplierViewComponent implements OnInit {

  suppliersList: Supplier[]


  constructor(private supplierService: SupplierService) {

    this.suppliersList = supplierService.getSuppliers()

  }




  // onSupplierIdChanged(newId: number) {
  //   var supplier = this.suppliersList.find(element => element.id == newId)
  //   this.selectedSupplier = supplier!

  // }


  ngOnInit(): void {
  }

  deleteSupplier(id: number) {
    this.supplierService.deleteSupplier(id)
  }

}
