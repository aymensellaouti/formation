import { TestBed } from '@angular/core/testing';

import { PromesseService } from './promesse.service';

describe('PromesseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromesseService = TestBed.get(PromesseService);
    expect(service).toBeTruthy();
  });
});
