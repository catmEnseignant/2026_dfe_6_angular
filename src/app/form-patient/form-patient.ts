import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient-service';
import { error } from 'console';

@Component({
  selector: 'app-form-patient',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-patient.html',
  styleUrl: './form-patient.css',
})
export class FormPatient implements OnInit {
  isedit = false

  idpatient = null
  private activateRoute = inject(ActivatedRoute)

  patient: any




  FormPatient = new FormGroup({
    prenom: new FormControl(''),
    nom: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl('')

  });

  private http = inject(HttpClient);
  private router = inject(Router);
  private Service = inject(PatientService);

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(id)
    if (id) {
      this.isedit = true
      this.Service.FinPatient(id).subscribe(
        res => {
          this.patient = res
          console.log(this.patient)
        },
        error => {
          console.log(error)
        }
      );

    }
    else {
      this.isedit = false

    }

  }

  inputformPatient() {
    console.log(this.FormPatient.value);

    let data = this.FormPatient.value;

    this.Service.storepatient(data)
      .subscribe(() => {
        console.log("Patient ajouté avec succès");

        // redirection vers la liste
        this.router.navigate(['/patient']); ``
      });
  }

}
