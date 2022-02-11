import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterElementsComponent } from './counter-elements.component';

describe('CounterElementsComponent', () => {
  let component: CounterElementsComponent;
  let fixture: ComponentFixture<CounterElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
