import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-patient',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-patient.html',
  styleUrl: './form-patient.css',
})
export class FormPatient {

  FormPatient = new FormGroup({
    prenom: new FormControl(''),
    nom: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl('')

  });

  private http = inject(HttpClient);
  private router = inject(Router);

  inputformPatient() {
    console.log(this.FormPatient.value);

    let data = this.FormPatient.value;

    this.http.post("http://localhost:3000/patient", data)
      .subscribe(() => {
        console.log("Patient ajouté avec succès");

        // redirection vers la liste
        this.router.navigate(['/patient']);
      });
  }

}
