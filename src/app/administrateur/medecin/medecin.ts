import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MedecinService, Medecin as MedecinInterface } from '../../medecin-service';

@Component({
  standalone: true,
  selector: 'app-medecin',
  imports: [CommonModule],
  templateUrl: './medecin.html',
  styleUrl: './medecin.css',
})
export class Medecin implements OnInit {
  medecins$!: Observable<any[]>;

  private router = inject(Router);
  private medecinService = inject(MedecinService);

  ngOnInit(): void {
    this.loadMedecins();
  }

  loadMedecins(): void {
    this.medecins$ = this.medecinService.getMedecins();
  }

  insertMedecin(): void {
    this.router.navigate(['/administration/insert-medecin']);
  }

  editMedecin(medecin: MedecinInterface): void {
    this.router.navigate(['/administration/edit-medecin', medecin.id]);
  }

  deleteMedecin(medecin: MedecinInterface): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce médecin ?')) {
      this.medecinService.deleteMedecin(medecin.id!).subscribe({
        next: () => {
          this.loadMedecins();
        },
        error: (err: any) => {
          console.error('Erreur lors de la suppression :', err);
          alert('Erreur lors de la suppression du médecin');
        },
      });
    }
  }

  trackById(index: number, medecin: MedecinInterface): number {
    return (medecin.id as number) ?? index;
  }
}
