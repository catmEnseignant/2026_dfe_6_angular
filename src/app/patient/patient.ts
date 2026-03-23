import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient 
{
  title = 'Patients';
tableauPatients = [
  { prenom: 'paya', nom: 'niang', email: 'p.niang04@getMaxListeners.com'},
  { prenom: 'fatou', nom: 'ndiaye', email: 'p.niang04@getMaxListeners.com'},
  { prenom: 'pays', nom: 'niang', email: 'p.niang04@getMaxListeners.com'}

];
 



  constructor(private router: Router) {
    
  }

getSomme(a: number, b: number): number{
  return a + b;
}
getEmail():string{
  return"seck@mail.com";
}

getInfoPatient(){
  this.router.navigate(['form'])};

}



