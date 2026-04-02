import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-patient',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-patient.html',
  styleUrl: './form-patient.css',
})
export class FormPatient {
  formPatient = new FormGroup({
    prenom: new FormControl(''),
    nom: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
    consent: new FormControl(false)
  });

  private http = inject(HttpClient);
  private router = inject(Router);

  inputFormpatient() {
    const data = this.formPatient.value;
    (data as any).id = Date.now().toString(36);
    this.http.post('http://localhost:3000/patients', data).subscribe({
      next: (res) => {
        console.log('Patient ajouté:', res);
        this.formPatient.reset();
        this.router.navigate(['/patient']);
      },
      error: (err) => {
        console.log('Erreur:', err);
      }
    });
  }
}

