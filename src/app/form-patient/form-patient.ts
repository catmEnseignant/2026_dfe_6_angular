import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient-service';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form-patient',
  imports: [ReactiveFormsModule],
  templateUrl: './form-patient.html',
  styleUrl: './form-patient.css',
})
export class FormPatient implements OnInit
{
  title = 'Patients';
  formPatient: FormGroup;

tableauPatients2 :any = [];
 
  constructor(
    private router: Router,
    private http:HttpClient,
    private service:PatientService,
    private fb: FormBuilder) {
    this.formPatient = this.fb.group({
      nom: [''],
      prenom: [''],
      mail: [''],
      age: ['']
    });
  }

  ngOnInit(): void {
    console.log ("tester la methode");
    this.getPatients().subscribe({
      next: (res) => {
        console.log('Données reçues:', res);
        this.tableauPatients2 = res;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des patients:', err);
      }
    });
  }

getSomme(a: number, b: number): number{
  return a + b;
}
getEmail():string{
  return"Khadija@mail.com";
}

getInfoPatient(){
  this.router.navigate(['direction']);

}
 getPatients(){
   return this.http.get("http://localhost:3000/patients");
   
 }
 getEditPatients(data:any){
  console.log("test le methode :",data)
  this.router.navigate(['edit-patient',data.id]);
 }

 inputFormPatient(){
  if(this.formPatient.valid){
    const patient = this.formPatient.value;
    this.http.post("http://localhost:3000/patients", patient).subscribe({
      next: (res) => {
        console.log('Patient enregistré:', res);
        this.formPatient.reset();
        this.router.navigate(['']);
      },
      error: (err) => {
        console.error('Erreur lors de l\'enregistrement:', err);
      }
    });
  }
 }


}