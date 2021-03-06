import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo2ComponentComponent } from './modulo2-component.component';

describe('Modulo2ComponentComponent', () => {
  let component: Modulo2ComponentComponent;
  let fixture: ComponentFixture<Modulo2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modulo2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modulo2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
