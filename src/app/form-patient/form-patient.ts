import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // ✅ corrigé

@Component({
  selector: 'app-form-patient',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-patient.html',
  styleUrls: ['./form-patient.css'], // ✅ corrigé
})
export class FormPatient {

  formPatient = new FormGroup({
    prenom: new FormControl(''),
    nom: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl('')
  });

  private http = inject(HttpClient);
  private router = inject(Router);

  inputFormPatient() {
    console.log("test");
    console.log(this.formPatient.value);

    let data = this.formPatient.value;

    this.http.post("http://localhost:3000/patients", data)
      .subscribe({
        next: res => {
          console.log("patient ajouté avec succès");
          console.log(res);

          this.router.navigate(['patient']); // redirection
        },
        error: err => {
          console.log("erreur lors de l'ajout du patient");
          console.log(err);
        }
      });
  }
}