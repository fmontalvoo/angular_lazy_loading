import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo1ComponentComponent } from './modulo1-component.component';

describe('Modulo1ComponentComponent', () => {
  let component: Modulo1ComponentComponent;
  let fixture: ComponentFixture<Modulo1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modulo1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modulo1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
