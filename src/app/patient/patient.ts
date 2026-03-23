import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient {
  title = 'patients';
  nombrePatients = 100;
  prenom = "fatou";
  nom = "kebe";
  email = "kebe03.fatou@gmail.com";
  getSomme(a: number, b: number): number{
    return a + b;
  }
  constructor(private router: Router){

  }

  getEmail():string{
    return "kebe03.fatou@gmail.com";
  }

  getInfoPatient(){
    this.router.navigate(['direction']);
  }

 

  }


