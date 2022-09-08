import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { BannerComponent } from './banner/banner.component';

import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { SupplierViewComponent } from './supplier-view/supplier-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminTabGroupComponent } from './admin-tab-group/admin-tab-group.component';
import { AdminGuard } from './guards/adminguard';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateSupplierComponent } from './update-supplier/update-supplier.component';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';
import { LifeCycleTestComponent } from './life-cycle-test/life-cycle-test.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component'
import { UserDetailsComponent } from './user-details/user-details.component'
import { CartGuard } from './guards/cartguard';
import { MaterialTestComponent } from './material-test/material-test.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';

import { CustomDirective } from './custom.directive';
import { OpacityDirective } from './opacity.directive';
import { UserDashborardComponent } from './user-dashborard/user-dashborard.component';



@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    BannerComponent,
    ContentComponent,
    HomeComponent,
    ViewUserComponent,
    AdminViewComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    ProductDetailComponent,
    ProductsComponent,
    SupplierViewComponent,
    UpdateProductComponent,
    AddProductComponent,
    AddUserComponent,
    AddSupplierComponent,
    AdminTabGroupComponent,
    UpdateUserComponent,
    UpdateSupplierComponent,
    CustomValidatorComponent,
    LifeCycleTestComponent,
    CartComponent,
    SupplierDetailComponent,
    AttributeDirectiveComponent,
    UserDetailsComponent,

    MaterialTestComponent,
    CustomDirectiveComponent,
    CustomDirective,
    OpacityDirective,

    ContentComponent,
      UserDashborardComponent,
      

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [
    AdminGuard, CartGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
