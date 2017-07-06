import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommercePageComponent } from './e-commerce-page.component';

describe('ECommercePageComponent', () => {
  let component: ECommercePageComponent;
  let fixture: ComponentFixture<ECommercePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECommercePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECommercePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
