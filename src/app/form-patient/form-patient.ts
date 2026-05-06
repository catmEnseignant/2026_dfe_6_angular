import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router'; 
import { PatientService } from '../patient-service';
import { OnInit } from '@angular/core';

@Component({
  standalone: true, 
  selector: 'app-form-patient',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-patient.html',
  styleUrls: ['./form-patient.css'], 
})
export class FormPatient implements OnInit {


  isedit=false

  idPatient = null

  private activatedRoute= inject(ActivatedRoute)

  patient:any

  

  formPatient = new FormGroup({
    prenom: new FormControl(''),
    nom: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl('')
  });

  private http = inject(HttpClient);
  private router = inject(Router);
  private service= inject(PatientService) ;//injection de dependance

  ngOnInit(): void{
   const id= this.activatedRoute.snapshot.paramMap.get('id');
   console.log(id)

   if(id){
    this.isedit = true

    this.service.FinPatient(id).subscribe(
      res=>{this.patient= res

        this.formPatient.patchValue({
          prenom: this.patient.prenom,
          nom: this.patient.nom,
          email: this.patient.email,
          age: this.patient.age
          

        })
        console.log(this.patient)

      },
      error=>{
        console.log(error)
      }
     
    );
    


   }else{
    this.isedit = false;
   }


  }
 

  

  inputFormPatient() {
    if (this.isedit){
      console.log('edit')
      this.service.UpdatePatient

    } else{
      console.log(this.formPatient.value);
      let data = this.formPatient.value;
      //gestion de dependance du fichier patientservice
      this.service.StorePatient(data).subscribe( ()=>{
        console.log("patient ajouter avec success")
        this.router.navigate(['/patient'])
      });

    }   
  }
}