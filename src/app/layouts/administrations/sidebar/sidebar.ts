import { Component } from '@angular/core';
import { Content } from '../../../content/content';
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
    this.router.navigate(['/administration/insert-patient']);
  }

  goToPatientList() {
    this.router.navigate(['/administration/patient']);
  }

  goToMedecinList() {
    this.router.navigate(['/administration/medecin']);
  }

  goToFormMedecin() {
    this.router.navigate(['/administration/insert-medecin']);
  }
}
