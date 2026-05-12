import { Component } from '@angular/core';
import { Content } from '../content/content';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [Content],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  constructor(private router: Router) {}

  goToFormPatient() {
    this.router.navigate(['/insert-patient']);
  }

  goToPatientList() {
    this.router.navigate(['/patient']);
  }

  goToMedecinList() {
    this.router.navigate(['/medecin']);
  }

  goToFormMedecin() {
    this.router.navigate(['/insert-medecin']);
  }
}

