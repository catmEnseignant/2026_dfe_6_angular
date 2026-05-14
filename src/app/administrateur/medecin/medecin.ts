import { Component, inject, OnInit } from '@angular/core';
import { MedecinService } from '../../medecin-service';
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
  // medecins! : Observable<any>
  medecins: any = []

  private route = inject(Router)
  private medecinService = inject(MedecinService)

  ngOnInit(): void {
   this.medecinService.getMedecins().subscribe({
     next: (data) => {
       this.medecins = data
     }
   })
    console.log(this.medecins)
  }

  insertMedecin() {
    this.route.navigate(['/administration/insert-medecin'])
  }

  editMedecin(medecin:any) {
    console.log(medecin)
    this.route.navigate(['administration/edit-medecin', medecin.id])
  }

  deleteMedecin(id:any) {
    console.log("Suppression reussi", id)
    this.medecinService.deleteMedecin(id).subscribe((res) => {
      console.log("Suppresion reussi", res)
      this.route.navigate(["/administration/medecin"])
    }, (err) => {
      console.log("Erreur lors de la suppression", err)
    })
  }
}
