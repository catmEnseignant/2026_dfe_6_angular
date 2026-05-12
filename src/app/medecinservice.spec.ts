import { TestBed } from '@angular/core/testing';

import { Medecinservice } from './medecinservice';

describe('Medecinservice', () => {
  let service: Medecinservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Medecinservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
