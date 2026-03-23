import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import {  Route, Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  imports: [Patient, Navbar],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient {
 
  title = 'Patients';
  nombrePatients = 100;
  prenom = "dib";
  nom = "dang"
  email = "dibdang2003@gmail.com"

  constructor(private router: Router){

  }


  getSomme(a: number, b: number): number {
    return a + b
  }

  getEmail(): string {
    return 'dibdang2003@gmail.com';
  }

  getInfoPatient(){
    this.router.navigate(['direction'])

  }

}
