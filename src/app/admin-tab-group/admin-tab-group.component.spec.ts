import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTabGroupComponent } from './admin-tab-group.component';

describe('AdminTabGroupComponent', () => {
  let component: AdminTabGroupComponent;
  let fixture: ComponentFixture<AdminTabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTabGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
