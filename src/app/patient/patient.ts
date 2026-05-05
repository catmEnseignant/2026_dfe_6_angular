import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient-service';

@Component({
  standalone: true,
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})

export class Patient implements OnInit {

  title = 'Patients';

  // ✅ tableau réel pour @for
 tableauPatients2: any[] = [];

  constructor(
    private router: Router,

    private patientService: PatientService ) {




  }


  // ✅ Angular reconnaît cette méthode
  ngOnInit(): void {
    this.loadPatients();
    
    
  }

  // ✅ chargement asynchrone correct
  loadPatients(): void {
    this.patientService.getPatients().subscribe({
      next: (res: any[]) => {
        this.tableauPatients2 = res;
      },
      error: (err) => {
        console.log("Erreur récupération patients");
        console.log(err);
      }
    });
  }

 /* getPatients() {
    return this.http.get<any[]>("http://localhost:3000/patients");
  }*/

  getSomme(a: number, b: number): number {
    return a + b;
  }

  getEmail(): string {
    return "seck@mail.com";
  }

  getInfoPatient(): void {
    this.router.navigate(['form-patient']);
  }

 editPatient(data: any): void {
    console.log("tester la methode :", data);//afficher les information du patient dans le console
    this.router.navigate(['edit-patient', data.id]);
  }
}
