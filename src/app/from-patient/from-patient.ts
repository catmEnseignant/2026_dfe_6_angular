import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-from-patient',
  standalone: true,   // 👈 OBLIGATOIRE
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './from-patient.html',
  styleUrl: './from-patient.css',
})
export class FormPatient {
  formPatient=new FormGroup({
    prenom : new FormControl(''),
    nom : new FormControl(''),
    email : new FormControl(''),
    age : new FormControl(0)  
  });

   private http = inject(HttpClient);
   private router = inject(Router);

  inputFormPatient(){
    console.log("tester");
    console.log(this.formPatient.value);
    let data = this.formPatient.value;
    this.http.post("http://localhost:3000/patients",data).subscribe({
      next: (res) => {
        console.log('Données envoyées avec succès:');
        console.log(res);
        this.formPatient.reset();  // ✅ Vider le formulaire
        this.router.navigate(['/patients']);  // ✅ Rediriger vers la liste
      },
      error: (err) => {
        console.error('Erreur lors de l\'envoi des données:');
        console.log(err);
      }
    });

  
    
    
  }

}