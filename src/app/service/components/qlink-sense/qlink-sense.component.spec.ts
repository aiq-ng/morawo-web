import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlinkSenseComponent } from './qlink-sense.component';

describe('QlinkSenseComponent', () => {
  let component: QlinkSenseComponent;
  let fixture: ComponentFixture<QlinkSenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QlinkSenseComponent]
    });
    fixture = TestBed.createComponent(QlinkSenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
