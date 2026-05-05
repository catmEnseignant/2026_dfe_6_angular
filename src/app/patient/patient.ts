import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient-service';


@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient {
  tittle = 'Patients'


  prenom = 'mbengue'
  nom = 'seynabou'
  email = 'mbengueseyny@gmail.com'

  tableauPatients2: any = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private service: PatientService
  ) {




  }

  ngOnInit(): void {
    console.log("tester la methode")
    this.service.getpatients().subscribe(reponse => {
      console.log(reponse);
      this.tableauPatients2 = reponse;
    });
  }


  getEmail() {
    return "secksanou@gmail.com";
  }

  getInfosPatient() {
    this.router.navigate(['form-patient']);
  }

  getpatients() {
    return this.http.get("http://localhost:3000/patient");


  }
}
