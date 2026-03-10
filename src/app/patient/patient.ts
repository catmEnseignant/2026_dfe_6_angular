import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient implements OnInit {
  title = 'Patient';
  prenom = "Omar Cheikh";
  nombrePatients = 100;
  nom = "Niang";
  email = "ocn@gmail.com";
  id = 3;


  constructor( private router: Router, private http:HttpClient) {

}
ngOnInit(): void {
    console.log("tester la methode");
    this.GetPatients().subscribe(res=> {
      console.log(res);
      this.tableauPatients2 = res;
      
    });
    
}
    tableauPatients2 :any = [];

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
  GetPatients() {
    return this.http.get('http://localhost:3000/patients');
    

  }


}
