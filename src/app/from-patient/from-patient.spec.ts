import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromPatient } from './from-patient';

describe('FromPatient', () => {
  let component: FromPatient;
  let fixture: ComponentFixture<FromPatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromPatient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromPatient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
