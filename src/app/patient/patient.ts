import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient {
  title='patients';

  nombrePatient=100;

  prenom='Dieyna';

  nom='Faye';

  email='dieynabaf@gmail.com';
  constructor(private router:Router){

  }

  getSomme(a:number ,b:number){
  return a+b
  }
  getEmail():string{
    return "email@Gmail.com"
  }
  getInfoPatient(){
    this.router.navigate(['direction'])
  }


  Patients=[
    {
    prenom:"Dieyna",
    nom:"Faye",
    email:"dieyna@gmail.com",

    },
    {
    prenom:"Binetou",
    nom:"Dieye",
    email:"dieye@gmail.com",

    }
  ]

      

}