import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaStackComponent } from './java-stack.component';

describe('JavaStackComponent', () => {
  let component: JavaStackComponent;
  let fixture: ComponentFixture<JavaStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
