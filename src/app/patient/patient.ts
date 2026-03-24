
import { Component } from '@angular/core';
import { email } from '@angular/forms/signals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient {
  title = 'Patients'
  
  Patients = [
    {nom: 'John', prenom: 'Doe', mail: 'john.doe@example.com'},
    {nom: 'Jane', prenom: 'Smith', mail: 'jane.smith@example.com'},
    {nom: 'Bob', prenom: 'Johnson', mail: 'bob.johnson@example.com'},
    {nom: 'amy', prenom: 'Johnson', mail: 'amy.johnson@example.com'}
  ]

  constructor(private router: Router) { // Injection de dependance
     
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

}