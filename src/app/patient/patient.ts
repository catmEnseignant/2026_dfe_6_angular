import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})

// l'interface OnInit permet de charger la page des contenus des methodes qui ne necessitent aucune action pour s'afficher  
export class Patient implements OnInit {
  title = 'Patients';

  patients2 :any = []

  // HttpClient (classe) permet d'afficher le contenu depuis la base vers la page html
  constructor(private route:  Router, private http: HttpClient) {}

  // ngOnInit est une methide abstraite de l'interface OnInit donc qui a besoin d'être declarer dans la classe concrete
  ngOnInit(): void {
    console.log("Tester la methode")
    this.getPatients().subscribe(res => {
      console.log(res)
      this.patients2 = res
    }) 
  }

  getSomme(a: number, b:number) :number {
    return a + b
  }

  getEmail() :string {
    return "email@gmail.com"
  }

  getInfoPatient() {
    this.route.navigate(['/formulaire']);
  }

  getPatients() {
    return this.http.get('http://localhost:3000/patients')
  }
}
