import { Component } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.html',
  styleUrls: ['./patient.css']
})
export class Patient {

  title = 'patient';

  patients = [
    { nom: 'Ba', prenom: 'Aminata', email: 'aminata@gmail.com' },
    { nom: 'Diallo', prenom: 'Moussa', email: 'moussa@gmail.com' },
    { nom: 'Ndiaye', prenom: 'Fatou', email: 'fatou@gmail.com' }
  ];

  getSomme(a: number, b: number): number {
    return a + b;
  }

  getEmail(): string {
    return 'test@gmail.com';
  }
}