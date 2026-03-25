import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { get } from 'http';

@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient implements OnInit{
  title = 'Patients' // Title est un attribut de la classe Patient, il est initialisé à la valeur 'patient'.
  
  // prenom = 'Abdoulaye'
  // nom = 'SAMBA'
  // mail = 'palaye068@icloud.com'
  // nombrePatients = 100

  // Patients = [
  //   {id: 1, nom: 'SAMBA', prenom: 'Abdoulaye', mail: 'abdoulaye_samba@exemple.com'},
  //   {id: 2, nom: 'DIOP', prenom: 'Moussa', mail: 'moussa_diop@exemple.com'},
  //   {id: 3, nom: 'DIALLO', prenom: 'Aminata', mail: 'aminata_diall@exemple.com'},
  //   {id: 4, nom: 'BA', prenom: 'Fatou', mail: 'fatou_ba@exemple.com'},
  // ];

  Patients2 :any = [];

  constructor(private router: Router, private http:HttpClient) { // Injection de dependance du service Router dans le constructeur de la classe Patient, ce qui permet d'utiliser les fonctionnalités de navigation dans ce composant.
     
  }
  ngOnInit(): void { // Des qu'on charge cette methode cette methode est chargée automatiquement, elle est utilisée pour initialiser le composant et effectuer des tâches d'initialisation, comme la récupération de données ou la configuration de l'état initial du composant. 
    console.log('Le composant Patient a été initialisé'); 
    this.getPatients().subscribe(res => {
      console.log(res);
      this.Patients2 = res;
    });
  }
  getSomme(a: number , b: number): number{
    return a + b;
  }

  getEmail():string{
    return "exemple@gmail.com"
  }

  getInfoPatient(){
    this.router.navigate(['direction'])
  }

  getPatients(){
    let patient = this.http.get('http://localhost:3000/patients');
    return patient;
  }
    

}
