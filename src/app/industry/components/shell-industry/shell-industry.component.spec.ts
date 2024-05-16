import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellIndustryComponent } from './shell-industry.component';

describe('ShellIndustryComponent', () => {
  let component: ShellIndustryComponent;
  let fixture: ComponentFixture<ShellIndustryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellIndustryComponent]
    });
    fixture = TestBed.createComponent(ShellIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
