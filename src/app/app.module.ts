import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AdminComponent } from './admin/admin.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddServiceComponent } from './add-service/add-service.component';

import { AdminGuard } from 'src/guards/adminguard';
import { ViewAdminProductsComponent } from './view-admin-products/view-admin-products.component';
import { UserViewComponent } from './user-view/user-view.component';
import { CartComponent } from './cart/cart.component';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    BannerComponent,
    ContentComponent,
    HomeComponent,
    ViewUserComponent,
    AdminComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    ProductDetailsComponent,
    ViewSupplierComponent,
    UpdateProductComponent,
    AddProductComponent,
    AddServiceComponent,
    ViewAdminProductsComponent,
    UserViewComponent,
    CartComponent,
    CustomValidatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
