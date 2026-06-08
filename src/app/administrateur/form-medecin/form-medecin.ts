import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService } from '../../medecin-service';

@Component({
  selector: 'app-form-medecin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-medecin.html',
  styleUrl: './form-medecin.css',
})
export class FormMedecin implements OnInit {
  isEdit = false;
  isDelete = false;
  idMedecin: any;
  
  private activateRoute = inject(ActivatedRoute);
  private http = inject(HttpClient);
  public router = inject(Router);
  private service = inject(MedecinService);
  private medecin: any;

  // Formulaire avec validation
  formMedecin = new FormGroup({
    prenom: new FormControl('', [Validators.required, Validators.minLength(2)]),
    nom: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    specialite: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.idMedecin = id;
      
      // Récupérer les informations du médecin pour modification
      this.service.getMedecinById(id).subscribe((res: any) => {
        this.medecin = res;
        console.log(this.medecin);
        
        this.formMedecin.patchValue({
          prenom: this.medecin.prenom,
          nom: this.medecin.nom,
          email: this.medecin.email,
          specialite: this.medecin.specialite
        });
      }, (error: any) => {
        console.error('Erreur lors de la récupération du médecin', error);
      });
    } else {
      this.isEdit = false;
    }
  }

  // Soumettre le formulaire
  inputFormMedecin() {
    if (this.formMedecin.valid) {
      if (this.isEdit) {
        console.log("édition du médecin");
        this.service.updateMedecin(this.idMedecin, this.formMedecin.value).subscribe(() => {
          console.log('Médecin modifié avec succès');
          this.router.navigate(['/medecin']);
        }, (error: any) => {
          console.error('Erreur lors de la modification du médecin', error);
        });
      } else {
        console.log(this.formMedecin.value);
        let data = this.formMedecin.value;
        this.service.addMedecin(data).subscribe(() => {
          console.log('Médecin ajouté avec succès');
          this.router.navigate(['/medecin']);
        }, (error: any) => {
          console.error('Erreur lors de l\'ajout du médecin', error);
        });
      }
    } else {
      console.log('Formulaire invalide');
      this.markFormFieldsAsTouched();
    }
  }

  // Marquer tous les champs comme touchés pour afficher les erreurs
  markFormFieldsAsTouched() {
    Object.keys(this.formMedecin.controls).forEach(key => {
      const control = this.formMedecin.get(key);
      control?.markAsTouched();
    });
  }

  // Getters pour les messages d'erreur
  get prenomError() {
    const control = this.formMedecin.get('prenom');
    if (control?.hasError('required') && control.touched) {
      return 'Le prénom est requis';
    }
    if (control?.hasError('minlength') && control.touched) {
      return 'Le prénom doit contenir au moins 2 caractères';
    }
    return null;
  }

  get nomError() {
    const control = this.formMedecin.get('nom');
    if (control?.hasError('required') && control.touched) {
      return 'Le nom est requis';
    }
    if (control?.hasError('minlength') && control.touched) {
      return 'Le nom doit contenir au moins 2 caractères';
    }
    return null;
  }

  get emailError() {
    const control = this.formMedecin.get('email');
    if (control?.hasError('required') && control.touched) {
      return 'L\'email est requis';
    }
    if (control?.hasError('email') && control.touched) {
      return 'Veuillez entrer un email valide';
    }
    return null;
  }

  get specialiteError() {
    const control = this.formMedecin.get('specialite');
    if (control?.hasError('required') && control.touched) {
      return 'La spécialité est requise';
    }
    return null;
  }

  navigateToForm() {
  this.router.navigate(['form-medecin']);
}

editMedecin(medecin: any) {
  this.router.navigate(['edit-medecin', medecin.id]);
}
}