import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from '../models/supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-view',
  templateUrl: './supplier-view.component.html',
  styleUrls: ['./supplier-view.component.scss']
})
export class SupplierViewComponent implements OnInit {

  suppliersList: Supplier[]


  constructor(private supplierService: SupplierService, private router: Router) {

    this.suppliersList = []
    supplierService.getSuppliersHttp().subscribe(data => { this.suppliersList = data })

  }




  // onSupplierIdChanged(newId: number) {
  //   var supplier = this.suppliersList.find(element => element.id == newId)
  //   this.selectedSupplier = supplier!

  // }


  ngOnInit(): void {
  }

  deleteSupplier(id: number) {
    if (confirm('Are you sure you want to delete this supplier?')) {
      this.supplierService.deleteSupplier(id).subscribe(data => {
        console.log("deleted" , data)
      })
      location.reload();
    } else {
      console.log('Nope');
    }

  }
  
  viewSupplier(id : number){
    this.router.navigate(['supplier/' + id])
  }

}
