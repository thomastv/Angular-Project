import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminProductsComponent } from './view-admin-products.component';

describe('ViewAdminProductsComponent', () => {
  let component: ViewAdminProductsComponent;
  let fixture: ComponentFixture<ViewAdminProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdminProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAdminProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
