import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin, MedecinService } from '../medecin-service';

@Component({
  standalone: true,
  selector: 'app-form-medecin',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-medecin.html',
  styleUrl: './form-medecin.css',
})
export class FormMedecin implements OnInit {
  formMedecin = new FormGroup({
    prenom: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    specialite: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl(''),
  });

  loading = false;
  editMode = false;
  medecinId: number | null = null;

  private medecinService = inject(MedecinService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      this.medecinId = Number(id);
      this.loadMedecin(this.medecinId);
    }
  }

  private loadMedecin(id: number): void {
    this.loading = true;
    this.medecinService.getMedecin(id).subscribe({
      next: (medecin) => {
        this.formMedecin.patchValue(medecin);
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement du médecin :', err);
        this.loading = false;
      },
    });
  }

  submitForm(): void {
    if (this.formMedecin.invalid) {
      this.formMedecin.markAllAsTouched();
      return;
    }

    const medecinData = this.formMedecin.value as Medecin;
    this.loading = true;

    if (this.editMode && this.medecinId !== null) {
      this.medecinService.updateMedecin(this.medecinId, medecinData).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/medecin']);
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour du médecin :', err);
          this.loading = false;
          alert('Impossible de mettre à jour le médecin');
        },
      });
    } else {
      this.medecinService.createMedecin(medecinData).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/medecin']);
        },
        error: (err) => {
          console.error('Erreur lors de l’ajout du médecin :', err);
          this.loading = false;
          alert('Impossible d’ajouter le médecin');
        },
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/medecin']);
  }

  get formTitle(): string {
    return this.editMode ? 'Modifier le médecin' : 'Ajouter un médecin';
  }

  get submitLabel(): string {
    return this.editMode ? 'Mettre à jour' : 'Enregistrer';
  }
}
