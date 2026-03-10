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
  prenom = "Omar Cheikh";
  nombrePatients = 100;
  nom = "Niang";
  email = "ocn@gmail.com";
  id = 3;


  constructor( private router: Router) {

}

  tableauPatients = [
    { id:1, nom: "Fall", prenom: "Aminata", email: "af@gmail.com"},
    { id:2, nom: "Ndiaye", prenom: "Patrick", email: "pn@gmail.com"},
    { id:3, nom: "Seye", prenom: "Bintou", email: "bs@gmail.com"}
  ];

  GetSomme (a: number, b: number): number {
    return a + b;
  }

  GetEmail(): string {
    return "oc.niang6@isepat.edu.sn";
  }

  GetPrenom(): string {
    return "Baye Marame";
  }

  GetNom(): string {
    return "Thiombane";
  }

  GetInfoPatient() {
    this.router.navigate(['form-patient']);
  }



}
