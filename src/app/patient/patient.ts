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

  Patients2 :any = []; //c'est pour 

  constructor(private router: Router, private http:HttpClient) { // Injection de dependance du service Router dans le constructeur de la classe Patient, ce qui permet d'utiliser les fonctionnalités de navigation dans ce composant.
     
  }
  ngOnInit(): void { // Des qu'on charge cette methode cette methode est chargée automatiquement, elle est utilisée pour initialiser le composant et effectuer des tâches d'initialisation, comme la récupération de données ou la configuration de l'état initial du composant. Cette methode doit etre forcement implémentée dans la classe Patient
    console.log('Le composant Patient a été initialisé'); 
    this.getPatients().subscribe(res => {
      console.log(res);
      this.Patients2 = res;
    }, error => { // pour dire en cas d'erreur 
      console.log("Erreur lors de la recuperation des patients dans la partie back-end")
      console.log(error);
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

  getPatients(){ // Cette methode utilise le service HttpClient pour effectuer une requete GET vers l'URL 'http://localhost:3000/patients' et retourne un Observable qui contient la réponse de la requete. L'observable est ensuite utilisé dans la methode ngOnInit pour récupérer les données des patients et les stocker dans l'attribut Patients2.
    let patient = this.http.get('http://localhost:3000/patients');
    return patient;
    // Observable c'est la reponse d'un serveur et c'est la fonction subscribe qui permet de traiter la requete http
  }
    

}











































































































