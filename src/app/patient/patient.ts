import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  imports: [],  // Pas besoin d'imports supplémentaires ici si Router est fourni globalement
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient {
  
  title = "patients";

  // Correction : patients doit être un TABLEAU, pas un objet
  patients = [
    { id: 1, prenom: 'Kadidia', nom: 'Ba', email: 'kadidia@gmail.com', age: 20 },
    { id: 2, prenom: 'Mamadou', nom: 'Diop', email: 'mamadou@gmail.com', age: 21 }
  ];

  nombrePatients = 100;
  prenom = "Khadija";
  nom = "Ba";
  email = "Kadidia@34gmail.com"

  constructor(private router: Router) { }

  getSomme(a: number, b: number): number {
    return a + b;
  }

  getEmail(): string {
    return "Khadija@gmail.com ";
  }

  getInfoPatient() {
    this.router.navigate(['/direction']);
  }
}