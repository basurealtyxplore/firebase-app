import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingPageComponent } from './branding-page.component';

describe('BrandingPageComponent', () => {
  let component: BrandingPageComponent;
  let fixture: ComponentFixture<BrandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
