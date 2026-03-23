import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient {
title = 'Patients';
nombrePatient = 100;
prenom = 'Dieynaba';
nom = "fall";
email = "diey@fall"

constructor(private router: Router){
  
}

getSomme(a: number, b: number): number{
  return a + b;
}
getEmail():string{
  return "rabynagido@gmail";
}

getInfoPatient(){
  this.router.navigate(['direction']);
}
}
