import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient-service';

@Component({
  selector: 'app-form-patient',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-patient.html',
  styleUrl: './form-patient.css',
})
export class FormPatient implements OnInit {
  isEdit = false
  idPatient:any
  patient:any

  // ActivatedRoute (classe) permettant de savoir la route empruntée pour accéder au composant
  private activeRoute = inject(ActivatedRoute)
  private route = inject(Router)
  private servicePatient = inject(PatientService)

  formPatient = new FormGroup({
    prenom : new FormControl(''),
    nom : new FormControl(''),
    email : new FormControl(''),
    age : new FormControl('')
  })

  ngOnInit() :void {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    console.log(id)

    if(id){
      this.isEdit = true
      this.idPatient = id
      this.servicePatient.findPatient(id).subscribe(res => {
        this.patient = res
        console.log(this.patient)

        // patchValue fonction pour préremplir le formulaire d'edition 
        this.formPatient.patchValue({
          prenom : this.patient.prenom,
          nom : this.patient.nom,
          email : this.patient.email,
          age : this.patient.age
        })
      }, err => {
        console.log("Erreur lors de la recuperation: ", err)
      })
    } else {
      this.isEdit = false
    }
  }

  inputFormPatient() {
    if(this.isEdit) {
      console.log("Modification avec success")
      this.servicePatient.updatePatient(this.idPatient, this.formPatient.value).subscribe(res => {
        console.log("Modification effectué avec succés")
        console.log(res)
        this.route.navigate(['/patient'])
      }, err => {
        console.log("Erreur lors de la modification", err)
      })
    } else {
      console.log("Tester la methode inputform")
      console.log(this.formPatient.value)
      let data = this.formPatient.value
  
      this.servicePatient.storePatients(data).subscribe(res => {
        console.log("Patient ajouté avec succées")
        console.log(res)
        this.route.navigate(['/patient'])
      }, err => {
        console.log("Erreur lors de l'ajout") 
        console.log(err)
      })
    }
  }
}
