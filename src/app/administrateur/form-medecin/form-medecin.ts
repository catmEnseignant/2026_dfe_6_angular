import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MedecinService } from '../../medecin-service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-medecin',
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './form-medecin.html',
  styleUrl: './form-medecin.css',
})
export class FormMedecin implements OnInit {

  isEdit = false
  IdMedecin:any
  medecin:any

  private activatedRoute =inject(ActivatedRoute)
  private route = inject(Router)
  private medecinService = inject(MedecinService)

  formMedecin = new FormGroup ({
    prenom: new FormControl(''),
    nom: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl(''),
    fonction: new FormControl('')
  })

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(id)

    if(id) {
      this.isEdit = true
      this.IdMedecin = id
      this.medecinService.findId(id).subscribe((res) => {
        this.medecin = res

        this.formMedecin.patchValue({
          prenom: this.medecin.prenom,
          nom: this.medecin.nom,
          email: this.medecin.email,
          telephone: this.medecin.telephone,
          fonction: this.medecin.fonction
        })
      }, (err) => {
        console.log("Erreur lors de la recuperation des données ", err)
      })
    } else {
      this.isEdit = false
    }
  }


  inputFormMedecin() {
    if(this.isEdit) {
      this.medecinService.updateMedecin(this.IdMedecin, this.formMedecin.value).subscribe((res) => {
        console.log("Modification réussi avvec succés", res)
        this.route.navigate(['/administration/medecin'])
      }, (err) => {
        console.log("Erreur lors de la modification", err)
      })
    } else {
      let data = this.formMedecin.value
      this.medecinService.storeMedecin(data).subscribe((res) => {
        console.log(res)
        this.route.navigate(["/administration/medecin"])
      }, (err) => {
        console.log('Insertion echoué', err)
      })
    }
  }  
}
