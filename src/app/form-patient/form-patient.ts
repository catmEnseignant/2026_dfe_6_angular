import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../patient-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-patient',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-patient.html',
  styleUrl: './form-patient.css',
})
export class FormPatient {
  formPatient = new FormGroup({
    prenom : new FormControl(''),
    nom : new FormControl(''),
    email : new FormControl(''),
    age : new FormControl('')
  })

  private http = inject(HttpClient)
  private route = inject(Router)
  private servicePatient = inject(PatientService)

  inputFormPatient() {
    console.log("Tester la methode inputform")
    console.log(this.formPatient.value)
    let data = this.formPatient.value
    this.http.post('http://localhost:3000/patients', data).subscribe(res => {
      console.log("Patient ajouté avec succées")
      console.log(res)
      this.route.navigate(['/patient'])
    }, err => {
      console.log("Erreur lors de l'ajout") 
      console.log(err)
    })
  }
}
