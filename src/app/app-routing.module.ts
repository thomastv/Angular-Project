import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminGuard } from './guards/adminguard';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CartComponent } from './cart/cart.component';
import { SupplierViewComponent } from './supplier-view/supplier-view.component';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { CartGuard } from './guards/cartguard';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDashborardComponent } from './user-dashborard/user-dashborard.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminViewComponent, canActivate: [AdminGuard] },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/product', component: ProductDetailComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'supplier/:id', component: SupplierDetailComponent, canActivate: [AdminGuard] },
  { path: 'updateProduct', component: UpdateProductComponent },
  { path: 'myCart', component: CartComponent, canActivate: [CartGuard] },
  { path: 'user/:id', component: UserDetailsComponent },
  {path: 'myDashboard', component:UserDashborardComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // { enableTracing: true }
  )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
