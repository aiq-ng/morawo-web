import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellServiceComponent } from './shell-service.component';

describe('ShellServiceComponent', () => {
  let component: ShellServiceComponent;
  let fixture: ComponentFixture<ShellServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellServiceComponent]
    });
    fixture = TestBed.createComponent(ShellServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
