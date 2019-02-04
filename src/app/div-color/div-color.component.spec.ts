import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivColorComponent } from './div-color.component';

describe('DivColorComponent', () => {
  let component: DivColorComponent;
  let fixture: ComponentFixture<DivColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
