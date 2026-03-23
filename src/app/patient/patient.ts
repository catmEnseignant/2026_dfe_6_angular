import { Component } from '@angular/core';
import {Router} from '@angular/router';

  

//cette ligne est pour créer un composant Angular appelé Patient. Le décorateur @Component est utilisé pour définir les métadonnées du composant, telles que son sélecteur, les modules qu'il importe, le template HTML et les styles CSS associés.
@Component({
  selector: 'app-patient',
  standalone: true,//cette ligne indique que ce composant est autonome, ce qui signifie qu'il peut être utilisé sans avoir besoin d'être déclaré dans un module Angular.
  imports: [],//cette ligne est pour importer les modules nécessaires pour ce composant, mais dans ce cas, il n'y en a aucun.
  templateUrl: './patient.html',//cette ligne est pour spécifier le fichier HTML qui contient le template du composant, c'est-à-dire la structure de l'interface utilisateur qui sera affichée lorsque ce composant sera utilisé dans l'application.
  styleUrls: ['./patient.css'],//cette ligne est pour spécifier les fichiers CSS qui contiennent les styles associés à ce composant, c'est-à-dire la mise en forme et l'apparence de l'interface utilisateur du composant.
})
//cette classe est pour gérer les données et les fonctionnalités liées aux patients dans l'application Angular. Elle contient des propriétés pour stocker les informations des patients, ainsi que des méthodes pour effectuer des opérations sur ces données.
export class Patient {
  title = 'patients';
  nombrePatients = 100;
  prenom= 'khady';
  nom= 'Gadiaga';
  email = 'khady.gadiaga@mainModule.com';
  //cette partie est pour afficher la liste des patients dans la page d'accueil de l'application. Chaque patient est représenté par un objet contenant son id, son nom, son prénom et son email.
  patients =[
    //cette partie est pour afficher la liste des patients dans la page d'accueil de l'application. Chaque patient est représenté par un objet contenant son id, son nom, son prénom et son email.
    {id: 1, nom: 'Gadiaga', prenom: 'Khady', email: 'khady.gadiaga@mainModule.com'},
    {id: 2, nom: 'Diallo', prenom: 'Mamadou', email: 'mamadou.diallo@mainModule.com'},
    {id: 3, nom: 'Diop', prenom: 'Awa', email: 'awa.diop@mainModule.com'}
  ]

  
   //cette partie est pour injecter le service Router dans le constructeur de la classe Patient, ce qui permet d'utiliser les fonctionnalités de navigation dans l'application Angular.
  constructor(private router: Router){
    
  }
 
  getSomme(a: number, b: number): number {
    return a + b;
  }

  getEmail(): String{
    return "khady@mail.com";
  }

  getInfoPatient(){
    this.router.navigate(['/form-patient']);

  }
}
