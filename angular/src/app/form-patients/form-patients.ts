import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-form-patient',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-patients.html',
  styleUrl: './form-patients.css',
})
export class FormPatient {

  formPatient = new FormGroup({
    prenom: new FormControl(''),
    nom: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl('')
  });

  private http = inject(HttpClient);
  private route = inject(Router);

  inputFormPatient() {
    console.log("FORM OK", this.formPatient.value);

    this.http.post('http://localhost:3000/patients', this.formPatient.value)
      .subscribe(() => {
        this.route.navigate(['/patient']);
      });
  }
}