import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSolutionComponent } from './our-solution.component';

describe('OurSolutionComponent', () => {
  let component: OurSolutionComponent;
  let fixture: ComponentFixture<OurSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurSolutionComponent]
    });
    fixture = TestBed.createComponent(OurSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
