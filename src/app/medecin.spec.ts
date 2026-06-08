import { TestBed } from '@angular/core/testing';
import { Medecin } from './administrateur/medecin';

describe('Medecin', () => {
  let service: Medecin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Medecin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
