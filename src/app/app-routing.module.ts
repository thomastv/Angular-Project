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
import { UserDetailsComponent } from './user-details/user-details.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminViewComponent, canActivate: [AdminGuard] },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'products', component: ProductsComponent },
  // { path: 'products/product', component: ProductDetailComponent },
  { path: 'updateProduct', component: UpdateProductComponent },
  { path: 'myCart', component: CartComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'user/:id',component:UserDetailsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // { enableTracing: true }
  )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
