import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
title = 'Patients';

  Patients2: any = [];

constructor(private route : Router ,private http: HttpClient){}


ngOnInit(): void {
  console.log('tester la methode');
  this.getPatients().subscribe ( res => {
    console.log(res)
    this.Patients2 = res 
  });
}

  getSomme(a: number, b: number): number {
    return a + b
  }
getEmail(): string {
  return 'khalifa@example.com';
}

 getInfoPatient(): void {
  this.route.navigate(['/Formulaire']);

}

getPatients() {
  return this.http.get("http://localhost:3000/patients");
}
}