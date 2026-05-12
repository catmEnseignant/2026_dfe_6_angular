import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedecinService } from '../medecin-service/medecin-service';

@Component({
  standalone: true,
  selector: 'app-medecin',
  imports: [],
  templateUrl: './medecin.html',
  styleUrl: './medecin.css',
})

export class Medecin implements OnInit {
  // Tableau qui contient la liste des médecins récupérés depuis l'API
  tableauMedecins: any[] = [];

  // Injection des dépendances : Router pour navigation, MedecinService pour appels API
  constructor(
    private router: Router,
    private medecinService: MedecinService
  ) {}

  ngOnInit(): void {
    this.loadMedecins();
  }

  // Récupère tous les médecins depuis le service
  loadMedecins(): void {
    this.medecinService.getMedecins().subscribe({
      next: (res: any[]) => {
        this.tableauMedecins = res;
      },
      error: (err) => {
        console.log("Erreur récupération médecins");
        console.log(err);
      }
    });
  }

  getInfoMedecin(): void {
    this.router.navigate(['form-medecin']);
  }

  editMedecin(data: any): void {
    this.router.navigate(['edit-medecin', data.id]);
  }

  deleteMedecin(id: any): void {
    this.medecinService.DeleteMedecin(id).subscribe(
      res => {
        console.log("Suppression réussie", res);

          // Stocke les données reçues dans le tableau
        this.tableauMedecins = this.tableauMedecins.filter(
          medecin => medecin.id !== id
        );
      },
      error => {
        console.log("Erreur suppression");
        console.log(error);
      }
    );
  }
}