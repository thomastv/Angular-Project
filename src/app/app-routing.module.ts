import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';
import { UserViewComponent } from './user-view/user-view.component';
import { ViewAdminProductsComponent } from './view-admin-products/view-admin-products.component';
import { AdminGuard } from 'src/guards/adminguard';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent,canActivate: [AdminGuard]},
  {path:'about-us',component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'view-user',component:ViewUserComponent},
  {path:'update-product',component:UpdateProductComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'add-supplier',component:AddServiceComponent},
  {path:'view-products',component:ProductDetailsComponent},
  {path:'admin-view',component:ViewAdminProductsComponent},
  {path:'supplier-details',component:ViewSupplierComponent},
  {path:'user-view',component:UserViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*,{enableTracing:true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
