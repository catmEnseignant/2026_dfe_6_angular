import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  private serviceAuth = inject(AuthService);

  formRegister = new FormGroup({
    prenom: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    specialite: new FormControl(''),
    addresse: new FormControl(''),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    telephone: new FormControl(''),
  });

registerUser(): void {

  if (this.formRegister.invalid) {
    this.formRegister.markAllAsTouched();
    return;
  }

  const data = {
    prenom: this.formRegister.value.prenom,
    nom: this.formRegister.value.nom,
    email: this.formRegister.value.email,
    addresse: this.formRegister.value.addresse,
    telephone: this.formRegister.value.telephone,
    specialite: this.formRegister.value.specialite,
    password: this.formRegister.value.password,
    password_confirmation: this.formRegister.value.confirmPassword
  };

  console.log(data);

  this.serviceAuth.register(data).subscribe({

    next: (response) => {
      console.log(response);
      alert('Compte créé avec succès');
      this.formRegister.reset();
    },

    error: (error) => {
      console.log(error.error);
      alert('Erreur lors de l’inscription');
    }

  });

}

}