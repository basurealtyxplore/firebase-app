import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XamppPageComponent } from './xampp-page.component';

describe('XamppPageComponent', () => {
  let component: XamppPageComponent;
  let fixture: ComponentFixture<XamppPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XamppPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XamppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
