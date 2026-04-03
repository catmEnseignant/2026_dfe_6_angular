import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NONAME } from 'node:dns';

@Component({
  selector: 'app-form-patient',
  imports: [CommonModule, ReactiveFormsModule],
  
  templateUrl: './form-patient.html',
  styleUrl: './form-patient.css',
})
export class FormPatient {
  
   formPatient=new FormGroup({
    prenom : new FormControl('')
    ,nom : new FormControl('')
    ,email : new FormControl('')
    ,age : new FormControl('')
   });

    private http =inject(HttpClient); 
    private router = inject(Router);

  inputFormPatient(){
   console.log("tester");
   console.log(this.formPatient.value);
    let data = this.formPatient.value;
   this.http.post("http://localhost:3000/patients",data)
    .subscribe(res=>{
      console.log("patient ajouté avec succès");
      console.log(res);
      this.router.navigate(['patient']);
    },
      err=>{
    console.log("erreur lors de l'ajout du patient");
    console.log(err);
   });
    

   
  }





}
