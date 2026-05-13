
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../patient-service';
import { error } from 'node:console';

@Component({
  selector: 'app-form-patient',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formpatient.html',
  styleUrl: './formpatient.css',
})
export class FormPatient implements OnInit {

  patient:any
  isedit=false
  idpatient:any
  formPatient = new FormGroup({
    prenom : new FormControl(''),
    nom : new FormControl(''),
    email : new FormControl(''),
    age : new FormControl('')
  })

 
  private route = inject(Router)
  private service=inject(PatientService)
  private activateroute=inject(ActivatedRoute)
  ngOnInit():void{
    const id =this.activateroute.snapshot.paramMap.get('id')
    console.log(id)
    if (id){
      this.idpatient=id;
      this.isedit=true
      this.service.findPatient(id).subscribe(res=>{
        this.patient=res
        this.formPatient.patchValue({
          prenom:this.patient.prenom,
          nom:this.patient.nom,
          email:this.patient.email,
          age:this.patient.age
        })
       
        console.log(this.patient)
      },error=>{
        console.log(error)
      })
    }else{
      this.isedit=false
    }


  }

  inputFormPatient() {
    if(this.isedit){
      this.service.updatePatient(this.idpatient,this.formPatient.value).subscribe(res=>{
        console.log(res)
        this.route.navigate(['/administration/patient'])
      },error=>{
        console.log(error)
      })
      console.log("modifier avec succes")
    }else{
      console.log("tester la methode inputform")
      console.log(this.formPatient.value)
      let data =this.formPatient.value
      this.service.storepatients(data).subscribe(res=>{
        console.log("patient ajouter avec sucsce")
        this.route.navigate(['/administration/patient'])
    
      }, error=>{

        console.log("error",error)
      })
    }
  }
 
    
    
  }

  
  














