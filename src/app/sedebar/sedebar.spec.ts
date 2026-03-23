import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sedebar } from './sedebar';

describe('Sedebar', () => {
  let component: Sedebar;
  let fixture: ComponentFixture<Sedebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sedebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sedebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
