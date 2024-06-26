import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigDataComponent } from './big-data.component';

describe('BigDataComponent', () => {
  let component: BigDataComponent;
  let fixture: ComponentFixture<BigDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigDataComponent]
    });
    fixture = TestBed.createComponent(BigDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
