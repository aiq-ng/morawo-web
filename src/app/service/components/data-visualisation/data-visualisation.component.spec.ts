import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataVisualisationComponent } from './data-visualisation.component';

describe('DataVisualisationComponent', () => {
  let component: DataVisualisationComponent;
  let fixture: ComponentFixture<DataVisualisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataVisualisationComponent]
    });
    fixture = TestBed.createComponent(DataVisualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
