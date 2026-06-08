import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { AuthService } from '../../auth-service';
import { Router } from 'express';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],

})


export class Register {

  private service = inject(AuthService);            
  private router = inject(Router);
  formRegister = new FormGroup({
    prenom: new FormControl(''),
    nom: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl('')
  })

  register() {
    console.log(this.formRegister.value);
    this.service.storeUser(this.formRegister.value).subscribe(
      (response) => {
        console.log('User registered successfully', response);

        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error registering user', error);
      }
    );
  }
}
