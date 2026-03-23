import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient {
  title = 'Patient';

  patients = [
    {
      nom: "Sy",
      prenom: "Awa",
      email: "awaSy@gmail.com"
    },
    {
      nom: "Faye",
      prenom: "Dieynaba",
      email: "dieyna@gmail.com"
    },
    {
      nom: "Samba",
      prenom: "Mamadou",
      email: "mamadou@gmail.com"
    }
  ]

  constructor(private route:  Router) {}

  getSomme(a: number, b:number) :number {
    return a + b
  }

  getEmail() :string {
    return "email@gmail.com"
  }

  getInfoPatient() {
    this.route.navigate(['/formulaire']);
  }
}
