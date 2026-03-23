import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient {
  title = 'Patients';
 
  tableauPatients = [
    { prenom: 'John', nom: 'Doe', email: 'exemple@gmail.com' },
    { prenom: 'Jane', nom: 'Smith', email: 'jane@gmail.com' },
    { prenom: 'Alice', nom: 'Johnson', email: 'alice@gmail.com' }
  ];
 

  constructor(private router: Router) {


  }

  getSomme (a: number, b: number): number {
    return a + b;
  }

  getEmail(): string {
    return "maman@gmail.com";
  }

  getInfoPatient(){
    this.router.navigate(['/Form-Patient']);

}
}
