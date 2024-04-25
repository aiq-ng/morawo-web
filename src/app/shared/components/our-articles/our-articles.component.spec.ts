import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurArticlesComponent } from './our-articles.component';

describe('OurArticlesComponent', () => {
  let component: OurArticlesComponent;
  let fixture: ComponentFixture<OurArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurArticlesComponent]
    });
    fixture = TestBed.createComponent(OurArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
