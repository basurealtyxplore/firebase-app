import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanStackComponent } from './mean-stack.component';

describe('MeanStackComponent', () => {
  let component: MeanStackComponent;
  let fixture: ComponentFixture<MeanStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeanStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
