import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBeveragesComponent } from './food-beverages.component';

describe('FoodBeveragesComponent', () => {
  let component: FoodBeveragesComponent;
  let fixture: ComponentFixture<FoodBeveragesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodBeveragesComponent]
    });
    fixture = TestBed.createComponent(FoodBeveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
