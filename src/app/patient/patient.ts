import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient {
 
  title = 'Patients';
  nombrePatients = 100;
  prenom = "Sanou";
  nom = "Seck";
  email = "secksanou@gmail.com"

  constructor(private router: Router){

  }


  getSomme(a: number, b: number): number {
    return a + b
  }

  getEmail(): string {
    return 'secksanou@gmail.com';
  }

  getInfoPatient(){
    this.router.navigate(['direction'])

  }

}