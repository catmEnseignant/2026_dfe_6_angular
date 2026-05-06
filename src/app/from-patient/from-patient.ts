import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient-service';
<<<<<<< HEAD
import { error } from 'console';

=======
import { error } from 'node:console';
>>>>>>> 87f88d960374dcef920b7c9ff5deb7c19544f9d8
@Component({
  selector: 'app-from-patient',
  standalone: true,   
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './from-patient.html',
  styleUrl: './from-patient.css',
})
export class FormPatient {
  isedit = false

<<<<<<< HEAD
  idPatient :any;
  private activateRoute = inject(ActivatedRoute)

 patient:any
=======
  idPatient = null
  private activateRoute = inject(ActivatedRoute)

 patient:any


>>>>>>> 87f88d960374dcef920b7c9ff5deb7c19544f9d8
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
<<<<<<< HEAD
      this.idPatient=id
      this.isedit = true;
      this.service.FinPatient(id).subscribe(
        res => {
          this.patient= res;
=======
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

>>>>>>> 87f88d960374dcef920b7c9ff5deb7c19544f9d8

          this.formPatient.patchValue({
            prenom : this.patient.prenom,
            nom : this.patient.nom,
            email : this.patient.email,
            age : this.patient.age,
          })
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
    if(this.isedit){
      console.log('edit');
      this.service.updatePatient(this.idPatient,this.formPatient.value).subscribe(
        ()=>{
          console.log('patient modifier avec succes');
          this.router.navigate(['/patient']);
      },
    error =>(
      console.log('erreur de mise a jour')
    ))

    }else{
      
    console.log(this.formPatient.value);
    let data = this.formPatient.value;
    this.service.storepatients(data)
      .subscribe(() => {
    console.log('Patient ajouter avec succès:');
        
        // Redirection vers le liste 
    this.router.navigate(['/patient']);     
    });
    }
    
  }

}