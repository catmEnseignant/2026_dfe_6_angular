import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService, Patient as PatientInterface } from '../../patient-service';

@Component({
  standalone: true,
  selector: 'app-patient',
  imports: [CommonModule],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient implements OnInit {
  title = 'Patients';
  patients: PatientInterface[] = [];
  loading = true;

  private router = inject(Router);
  private patientService = inject(PatientService);

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.loading = true;
    this.patientService.getPatients().subscribe({
      next: (patients: PatientInterface[]) => {
        this.patients = patients;
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Erreur lors du chargement des patients :', err);
        this.loading = false;
      },
    });
  }

  insertPatient(): void {
    this.router.navigate(['/administration/insert-patient']);
  }

  editPatient(patient: PatientInterface): void {
    this.router.navigate(['/administration/edit-patient', patient.id]);
  }

  deletePatient(patient: PatientInterface): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce patient ?')) {
      this.patientService.deletePatient(patient.id!).subscribe({
        next: () => {
          this.loadPatients();
        },
        error: (err: any) => {
          console.error('Erreur lors de la suppression :', err);
          alert('Erreur lors de la suppression du patient');
        },
      });
    }
  }

  trackById(index: number, patient: any): number {
    return patient.id ?? index;
  }
}
