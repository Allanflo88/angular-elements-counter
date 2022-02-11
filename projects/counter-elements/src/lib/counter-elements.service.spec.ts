import { TestBed } from '@angular/core/testing';

import { CounterElementsService } from './counter-elements.service';

describe('CounterElementsService', () => {
  let service: CounterElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
