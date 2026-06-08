import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../patient-service';

@Component({
  selector: 'app-form-patient',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-patient.html',
  styleUrl: './form-patient.css',
})

export class FormPatient implements OnInit {
  isEdit=false;
  isDelete=false;
  idpatient:any; 
  private activateRoute = inject(ActivatedRoute);
  
   formPatient=new FormGroup({
    prenom : new FormControl('')
    ,nom : new FormControl('')
    ,email : new FormControl('')
    ,age : new FormControl('')
   });

    private http =inject(HttpClient); 
    private router = inject(Router);
    private patient:any;
    // injection de dependance du service PatientService pour utiliser les methodes de ce service dans le composant FormPatient, comme la methode storePatient qui permet d'envoyer les données du formulaire vers le backend.
    private service = inject(PatientService);

    ngOnInit(): void {
      const id = this.activateRoute.snapshot.paramMap.get('id');
      if (id) {
        this.isEdit = true;
        this.idpatient = id;

        
        // ici on peut faire une requete pour recuperer les informations du patient à partir de son id et les afficher dans le formulaire pour les modifier.
      } else {
        this.isEdit = false;
      }

      if (this.isEdit) {
        this.service.FindPatient(id).subscribe (res => {
          this.patient = res;

          console.log(this.patient)
          this.formPatient.patchValue({
            prenom: this.patient.prenom,
            nom: this.patient.nom,
            email: this.patient.email,
            age: this.patient.age
          });
        },
        error => {
          console.error('Erreur lors de la récupération du patient', error);
        });
      }

   
  
  }
   
  
    
  inputFormPatient() {
    if(this.isEdit){
      console.log("edition");
      this.service.updatPatient(this.idpatient, this.formPatient.value).subscribe(() => { 
        console.log('patient modifié avec succès');
        this.router.navigate(['administrateur/patient']);
      }, error => {
        console.error('Erreur lors de la modification du patient', error);
      });
      // ici on peut faire une requete pour envoyer les données modifiées du formulaire vers le backend pour mettre à jour les informations du patient.
    }else{
      console.log(this.formPatient.value);
      let data = this.formPatient.value;
      this.service.storePatient(data).subscribe(() =>{
        console.log('patient ajouté avec succès');
        this.router.navigate(['administrateur/patient']);
      });

    
  }

  
    
   

    // on fait l'injection de dependance du service HttpClient pour envoyer les données du formulaire vers le backend en utilisant une requete POST. La methode subscribe est utilisée pour traiter la reponse de la requete, en cas de succes on affiche un message de confirmation et on redirige l'utilisateur vers la page des patients, en cas d'erreur on affiche un message d'erreur dans la console.
    
  
  }

  





}
