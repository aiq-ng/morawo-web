import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsServiceComponent } from './devops-service.component';

describe('DevopsServiceComponent', () => {
  let component: DevopsServiceComponent;
  let fixture: ComponentFixture<DevopsServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevopsServiceComponent]
    });
    fixture = TestBed.createComponent(DevopsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
