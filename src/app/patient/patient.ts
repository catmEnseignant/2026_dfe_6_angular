import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

  
@Component({
  selector: 'app-patient',
  imports: [],//cette ligne est pour importer les modules nécessaires pour ce composant, mais dans ce cas, il n'y en a aucun.
  templateUrl: './patient.html',//cette ligne est pour spécifier le fichier HTML qui contient le template du composant, c'est-à-dire la structure de l'interface utilisateur qui sera affichée lorsque ce composant sera utilisé dans l'application.
  styleUrls: ['./patient.css'],//cette ligne est pour spécifier les fichiers CSS qui contiennent les styles associés à ce composant, c'est-à-dire la mise en forme et l'apparence de l'interface utilisateur du composant.
})
//cette classe est pour gérer les données et les fonctionnalités liées aux patients dans l'application Angular. Elle contient des propriétés pour stocker les informations des patients, ainsi que des méthodes pour effectuer des opérations sur ces données.
export class Patient implements OnInit {

  // tableau des patients
  patients2: any[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    console.log("OnInit");

    this.getPatients().subscribe({
      next: (res: any) => {
        console.log("DATA:", res);
        this.patients2 = res; // 🔥 on remplit le tableau
      },
      error: (err) => {
        console.error("ERREUR:", err);
      }
    });
  }

  getPatients(){
    return this.http.get('http://localhost:3000/patients');
  }

  getSomme(a: number, b: number): number {
    return a + b;
  }

  getEmail(): string {
    return "khady@mail.com";
  }

  getInfoPatient(){
    this.router.navigate(['/form-patient']);
  }
}
