import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IotAnalyticsComponent } from './iot-analytics.component';

describe('IotAnalyticsComponent', () => {
  let component: IotAnalyticsComponent;
  let fixture: ComponentFixture<IotAnalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IotAnalyticsComponent]
    });
    fixture = TestBed.createComponent(IotAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
