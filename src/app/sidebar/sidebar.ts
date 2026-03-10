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
constructor( private router: Router) {

}
goToFormPatient() {
  console.log("je suis dans goToFormPatient");
  this.router.navigate(['/form-patient']);
}
goToPatientList() {
  console.log("je suis dans goToPatientList");
  this.router.navigate(['/patient']);
}
}
