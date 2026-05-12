import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MedecinService } from '../medecin-service';

@Component({
  selector: 'app-medecin',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './medecin.html',
  styleUrl: './medecin.css',
})
export class Medecin implements OnInit {
  title = 'Médecins';
  
  medecins$!: Observable<any>;
  
  private router = inject(Router);
  private service = inject(MedecinService);

  ngOnInit(): void {
    console.log('Le composant Medecin a été initialisé');
    this.loadMedecins();
  }

  loadMedecins() {
    this.medecins$ = this.service.getMedecins();
  }

  navigateToForm() {
    this.router.navigate(['form-medecin']);
  }

  editMedecin(medecin: any) {
    console.log("Modification du médecin", medecin);
    this.router.navigate(['edit-medecin', medecin.id]);
  }

  // Ajoutez cette méthode pour la suppression
  deleteMedecin(id: string) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce médecin ?')) {
      this.service.deleteMedecin(id).subscribe(() => {
        console.log('Médecin supprimé avec succès');
        this.loadMedecins(); // Recharger la liste
      }, error => {
        console.error('Erreur lors de la suppression du médecin', error);
      });
    }
  }
}