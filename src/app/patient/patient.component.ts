import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
title = 'Patients';
numberPatients = 100;

  prenom='binta'
   nom = 'Dieye'
   email = 'dieye@example.com' 

constructor(private route : Router ){}

  getSomme(a: number, b: number): number {
    return a + b
  }
getEmail(): string {
  return 'khalifa@example.com';
}

 getInfoPatient(): void {
  this.route.navigate(['/Formulaire']);
}
}