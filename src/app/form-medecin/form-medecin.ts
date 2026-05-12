import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService } from '../medecin-service/medecin-service';

@Component({
  standalone: true,
  selector: 'app-form-medecin',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-medecin.html',
  styleUrls: ['./form-medecin.css'],
})

export class FormMedecin implements OnInit {

  isedit = false;
  idMedecin: any;
  medecin: any;

  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(MedecinService);

  formMedecin = new FormGroup({
    prenom: new FormControl(''),
    nom: new FormControl(''),
    email: new FormControl(''),
    specialite: new FormControl('')
  });

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.idMedecin = id;

    if (id) {
      this.isedit = true;

      this.service.FindMedecin(id).subscribe(
        res => {
          this.medecin = res;

          this.formMedecin.patchValue({
            prenom: this.medecin.prenom,
            nom: this.medecin.nom,
            email: this.medecin.email,
            specialite: this.medecin.specialite
          });
        },
        error => {
          console.log(error);
        }
      );

    } else {
      this.isedit = false;
    }
  }

  inputFormMedecin() {

    if (this.isedit) {

      this.service.UpdateMedecin(
        this.idMedecin,
        this.formMedecin.value
      ).subscribe(
        res => {
          console.log("Médecin modifié avec succès", res);
          this.router.navigate(['/medecin']);
        },
        error => {
          console.log("Erreur modification", error);
        }
      );

    } else {

      this.service.StoreMedecin(
        this.formMedecin.value
      ).subscribe(
        () => {
          console.log("Médecin ajouté avec succès");
          this.router.navigate(['/medecin']);
        }
      );
    }
  }
}