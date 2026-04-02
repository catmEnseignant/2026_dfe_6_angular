import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-from-patient',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './from-patient.html',
  styleUrl: './from-patient.css'
})

export class FromPatient {
   formPatient = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),  // ✅ AJOUTÉ
    age: new FormControl('', [Validators.required, Validators.min(1)]),
    consent: new FormControl(false, Validators.requiredTrue)
   });

   private http = inject(HttpClient);
   private router = inject(Router);

   inputFormpatient() {
    // Vérifier si le formulaire est valide
    if (this.formPatient.invalid) {
      console.log('Formulaire invalide');
      alert('Veuillez remplir tous les champs');
      return;
    }

    const data = this.formPatient.value;
    console.log('Données envoyées :', data);
    
    this.http.post('http://localhost:3000/patients', data).subscribe({
      next: (res) => {
        console.log('Patient ajouté :', res);
        alert('Patient ajouté avec succès !');
        this.formPatient.reset();
        this.router.navigate(['/patient']);
      },
      error: (err) => {
        console.log('Erreur :', err);
        alert('Erreur : ' + err.message);
      }
    });
   }
}