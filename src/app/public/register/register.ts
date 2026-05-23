import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  private service = inject(AuthService)

  private route = inject(Router)

  formRegister = new FormGroup({
    prenom: new FormControl(''),
    nom: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl(''),
    adresse: new FormControl(''),
    password: new FormControl('')
  })

  RegisterUser(){
    console.log(this.formRegister.value);
    this.service.storeUser(this.formRegister.value).subscribe(res => {
      this.route.navigate(['/login']);
      console.log(res);
    }, error => {
      console.log("Erreur lors de l'inscription de l'utilisateur");
      console.log(error);
    });
  }
}
