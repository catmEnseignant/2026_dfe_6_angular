import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../patient-service';
@Component({
  selector: 'app-from-patient',
  standalone: true,   
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './from-patient.html',
  styleUrl: './from-patient.css',
})
export class FormPatient {
  formPatient=new FormGroup({
    prenom : new FormControl(''),
    nom : new FormControl(''),
    email : new FormControl(''),
    age : new FormControl(0)  
  });

   private http = inject(HttpClient);
   private router = inject(Router);
   private service =inject(PatientService);


  inputFormPatient(){
    console.log("tester");
    console.log(this.formPatient.value);
    let data = this.formPatient.value;
    this.service.storepatients(data)
      .subscribe(() => {
        console.log('Patient ajouter avec succès:');
        
        // Redirection vers le liste 
        this.router.navigate(['/patients']);  
      
      
    });

  
    
    
  }

}