import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-formpatient',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './formpatient.html',
  styleUrl: './formpatient.css',
})
export class FormPatient {

  formPatient= new FormGroup({
    prenom:new FormControl(''),
    nom:new FormControl(''),
    email:new FormControl('')
  });

  private http=inject(HttpClient);
  private router=inject(Router)

  inputFormPatient(){
    console.log("tester");
    console.log(this.formPatient.value)
    this.http.post("http://localhost:3000/patients",this.formPatient).subscribe(res=>{
      console.log("patient ajouter avec succes")
      console.log(res)

    })

  }




















}
