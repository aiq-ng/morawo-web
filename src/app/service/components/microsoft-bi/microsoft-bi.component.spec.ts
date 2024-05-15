import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftBiComponent } from './microsoft-bi.component';

describe('MicrosoftBiComponent', () => {
  let component: MicrosoftBiComponent;
  let fixture: ComponentFixture<MicrosoftBiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicrosoftBiComponent]
    });
    fixture = TestBed.createComponent(MicrosoftBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
