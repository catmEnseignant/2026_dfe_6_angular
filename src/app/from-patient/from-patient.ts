import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient-service';
import { error } from 'node:console';
@Component({
  selector: 'app-from-patient',
  standalone: true,   
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './from-patient.html',
  styleUrl: './from-patient.css',
})
export class FormPatient {
  isedit = false

  idPatient = null
  private activateRoute = inject(ActivatedRoute)

 patient:any


  formPatient=new FormGroup({
    prenom : new FormControl(''),
    nom : new FormControl(''),
    email : new FormControl(''),
    age : new FormControl(0)  
  });

   private http = inject(HttpClient);
   private router = inject(Router);
   private service =inject(PatientService);

   ngOnInit(): void{
    const id=this.activateRoute.snapshot.paramMap.get('id');
    console.log(id)
    if(id){
      this.isedit = true
      this.service.FinPatient(id).subscribe(
        res => {
          this.patient= res
          console.log(this.patient)

        },
        error =>{
          console.log(error)
        }
      );
    }
    else {
      this.isedit = false
    }

   }


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