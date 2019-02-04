import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncroComponent } from './asyncro.component';

describe('AsyncroComponent', () => {
  let component: AsyncroComponent;
  let fixture: ComponentFixture<AsyncroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
