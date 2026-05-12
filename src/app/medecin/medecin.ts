import { Component, inject, OnInit } from '@angular/core';
import { MedecinService } from '../medecin-service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medecin',
  imports: [AsyncPipe],
  templateUrl: './medecin.html',
  styleUrl: './medecin.css',
})
export class Medecin implements OnInit {
  medecins! : Observable<any>

  private route = inject(Router)
  private medecinService = inject(MedecinService)

  ngOnInit(): void {
    this.medecins = this.medecinService.getMedecins()
    console.log(this.medecins)
  }

  insertMedecin() {
    this.route.navigate(['/insert-medecin'])
  }

  editMedecin(medecin:any) {
    console.log(medecin)
    this.route.navigate(['edit-medecin', medecin.id])
  }

  deleteMedecin(id:any) {
    console.log("Suppression reussi", id)
    this.medecinService.deleteMedecin(id).subscribe((res) => {
      console.log("Suppresion reussi", res)
      this.route.navigate(["/medecin"])
    }, (err) => {
      console.log("Erreur lors de la suppression", err)
    })
  }
}
