import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashborardComponent } from './user-dashborard.component';

describe('UserDashborardComponent', () => {
  let component: UserDashborardComponent;
  let fixture: ComponentFixture<UserDashborardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashborardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashborardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
