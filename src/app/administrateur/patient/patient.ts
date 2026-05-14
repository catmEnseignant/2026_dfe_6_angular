import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PatientService } from '../../patient-service';

@Component({
  selector: 'app-patient',
  imports: [AsyncPipe],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})

// l'interface OnInit permet de charger la page des contenus des methodes qui ne necessitent aucune action pour s'afficher  
export class Patient implements OnInit {
  title = 'Patients';
  
  patients2: any = {}

  loading = true

  // HttpClient (classe) permet d'afficher le contenu depuis la base vers la page html
  // le constructor permet d'utiliser les methodes ou attributs d'une autre classe comme appartenent à la classe actuelle
  // constructor(private route:  Router, private http: HttpClient) {}
  private route = inject(Router)
  private servicePatient = inject(PatientService)

  // ngOnInit est une methode abstraite de l'interface OnInit donc qui a besoin d'être declarer dans la classe concrete
  ngOnInit(): void {
    console.log("Tester la methode")
    this.servicePatient.getPatients().subscribe(res => {
      console.log(res)
      this.patients2 = res
    })
    console.log(this.patients2)  
  }

  getInfoPatient() {
    this.route.navigate(['/administration/insert-patient']);
  }

  editPatient(patient:any) {
    console.log("Test : ", patient)
    this.route.navigate(['/administration/edit-patient', patient.id])
  }

  deletePatient(id:any) {
    console.log("Test: ", id)
    this.servicePatient.deletePatient(id).subscribe(res => {
      console.log("Supression reussi avec succés")
      console.log(res)
      this.route.navigate(['/administration/patient'])
    }, err => {
      console.log("Erreur lors de la suppression", err)
    })
  }
}
