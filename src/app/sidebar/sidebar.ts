import { Component } from '@angular/core';
import { Content } from '../content/content';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [Content, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  constructor(private router: Router) {

  }

  ajouterPatient(){
    this.router.navigate(['ajouter-patient']);
  }
} 