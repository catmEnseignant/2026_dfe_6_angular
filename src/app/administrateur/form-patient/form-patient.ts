import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient, PatientService } from '../../patient-service';

@Component({
  standalone: true,
  selector: 'app-form-patient',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-patient.html',
  styleUrl: './form-patient.css',
})
export class FormPatient implements OnInit {
  formPatient = new FormGroup({
    prenom: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dateNaissance: new FormControl(''),
  });

  loading = false;
  editMode = false;
  patientId: number | null = null;

  private patientService = inject(PatientService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      this.patientId = Number(id);
      this.loadPatient(this.patientId);
    }
  }

  private loadPatient(id: number): void {
    this.loading = true;
    this.patientService.getPatient(id).subscribe({
      next: (patient: Patient) => {
        this.formPatient.patchValue(patient);
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Erreur lors du chargement du patient :', err);
        this.loading = false;
      },
    });
  }

  submitForm(): void {
    if (this.formPatient.invalid) {
      this.formPatient.markAllAsTouched();
      return;
    }

    const patientData = this.formPatient.value as Patient;
    this.loading = true;

    if (this.editMode && this.patientId !== null) {
      this.patientService.updatePatient(this.patientId, patientData).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/administration/patient']);
        },
        error: (err: any) => {
          console.error('Erreur lors de la mise à jour du patient :', err);
          this.loading = false;
          alert('Impossible de mettre à jour le patient');
        },
      });
    } else {
      this.patientService.createPatient(patientData).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/administration/patient']);
        },
        error: (err: any) => {
          console.error('Erreur lors de l’ajout du patient :', err);
          this.loading = false;
          alert('Impossible d’ajouter le patient');
        },
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/administration/patient']);
  }

  get formTitle(): string {
    return this.editMode ? 'Modifier le patient' : 'Ajouter un patient';
  }

  get submitLabel(): string {
    return this.editMode ? 'Mettre à jour' : 'Enregistrer';
  }
}
