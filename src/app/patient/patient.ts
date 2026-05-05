import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient-service';


@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient implements OnInit {
  tittle = 'Patients'

  prenom = 'mbengue'
  nom = 'seynabou'
  email = 'mbengueseyny@gmail.com'

  tableauPatients2: any = [];

  constructor(
    private router: Router,
    private service: PatientService) {

  }

  ngOnInit(): void {
    console.log("tester la methode")
    this.service.getpatients().subscribe(reponse => {
      console.log(reponse);
      this.tableauPatients2 = reponse;
    },
      error => {
        console.error("Erreur lors de la récupération des patients :", error);

      }
    );
  }


  getEmail() {
    return "secksanou@gmail.com";
  }

  getInfosPatient() {
    this.router.navigate(['form-patient']);
  }

  EditPatient(data: any) {
    console.log("tester la méthode  :", data);
    this.router.navigate(['edit-patient', data.id]);

  }




}