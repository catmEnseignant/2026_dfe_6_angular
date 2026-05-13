import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../../patient-service';

@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})

export class Patient implements OnInit {  
  
  patients2:any=[]
  title='patients';

  nombrePatient=100;

  prenom='Dieyna';

  nom='Faye';

  email='dieynabaf@gmail.com';
  constructor(
    private router:Router,
    private service:PatientService
  ){

  }
  
  // ngOnInit est une methode abstraite de l'interface Onite donc qui a besoin d'etre declare

  ngOnInit(): void {
    console.log("tester la methode")
    this.service.getPatients().subscribe(res => {
      console.log(res)
      this.patients2=res;
    });
  }

  
  getSomme(a:number ,b:number){
  return a+b
  }
  getEmail():string{
    return "email@Gmail.com"
  }
  getInfoPatient(){
    this.router.navigate(['/administration'])
  }
  
  editPatient(data:any){
    console.log("tester la methode",data.id);
    this.router.navigate(['/administration/edit-patient',data.id])
  }
  

   deletePatient(id:any){
    console.log("delete patient")
    this.service.deletePatients(id).subscribe(
      res=>{
        this.router.navigate(["/administration/patient"])
        console.log(res)
      }

    );
    
  }
    
  


}