import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinService } from './medecin-service';

describe('MedecinService', () => {
  let component: MedecinService;
  let fixture: ComponentFixture<MedecinService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedecinService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedecinService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
