import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-patient',
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './form-patient.html',
  styleUrl: './form-patient.css',
})
export class FormPatient {
  formPatient =new FormGroup({
    prenom : new FormControl(''),
    nom : new FormControl(''),
    email : new FormControl(''),
    dateNaissance : new FormControl('')
  });

private http = inject(HttpClient);
private router = inject(Router);


inputFormPatient(){
  console.log("Formulaire soumis");
  console.log(this.formPatient.value);
  let data = this.formPatient.value;
  this.http.post('http://localhost:3000/patients', data).subscribe(res=>{
    console.log("Patient ajouté avec succès");
    console.log(res);
    this.router.navigate(['/patients']);
  }, error => {
    console.log("erreur lors de l'ajout de patient");
    console.log(error);
    
    
  });
}






}
