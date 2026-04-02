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
export class formPatient {
  FormPatient=new FormGroup({
    prenom: new FormControl(''),
    nom: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),

  });

 private http =inject(HttpClient);
 private router = inject(Router);


  inputFormPatient(){
    console.log("Tester");
    console.log(this.FormPatient.value); 
    let data = this.FormPatient.value;
    this.http.post('http://localhost:3000/patients', data).subscribe(res => {
      console.log('Patient ajouté avec succès');
      console.log(res);
      this.router.navigate(['/patient']);


    }, error => {
      console.log('Erreur lors de l\'ajout du patient');
      console.log(error);
    });

  }













  

}
