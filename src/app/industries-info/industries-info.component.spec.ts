import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesInfoComponent } from './industries-info.component';

describe('IndustriesInfoComponent', () => {
  let component: IndustriesInfoComponent;
  let fixture: ComponentFixture<IndustriesInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustriesInfoComponent]
    });
    fixture = TestBed.createComponent(IndustriesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
