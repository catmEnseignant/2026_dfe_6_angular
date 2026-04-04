import { Component } from '@angular/core';
import { email } from '@angular/forms/signals';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient {
  
  title = "patients";

  patients ={}
  nombrePatients = 100;
  prenom = "Khadija";
  nom = "Ba";
  email = "Kadidia@34gmail.com"
  constructor(private router: Router){

  }

  getSomme(a: number, b: number): number{
    return a + b;
  }

  getEmail():string  {
    return ("Khadija@gmail.com ");
  }

  
  getInfoPatient(){
  this.router.navigate(['/direction']);}


}


