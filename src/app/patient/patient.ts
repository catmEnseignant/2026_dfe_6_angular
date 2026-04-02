import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';
import { error } from 'node:console';

@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})

// l'interface OnInit permet de charger la page des contenus des methodes qui ne necessitent aucune action pour s'afficher  
export class Patient implements OnInit, OnDestroy {
  title = 'Patients';

  patients2 :any = []

  private destroy$ = new Subject<void>();

  // HttpClient (classe) permet d'afficher le contenu depuis la base vers la page html
  constructor(private route:  Router, private http: HttpClient) {}

  // ngOnInit est une methide abstraite de l'interface OnInit donc qui a besoin d'être declarer dans la classe concrete
  ngOnInit(): void {
    console.log("Tester la methode")
    this.loadPatients();

    this.route.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.loadPatients();
      });
  }

  private loadPatients() {
    this.getPatients().subscribe({
      next: (res) => {
        console.log(res);
        this.patients2 = res;
      },
      error: (error) => {
        console.log("Erreur lors de l'affichage des patients");
        console.log(error);
      }
    });
  }

  getSomme(a: number, b:number) :number {
    return a + b
  }

  getEmail() :string {
    return "email@gmail.com"
  }

  getInfoPatient() {
    this.route.navigate(['/formulaire']);
  }

  getPatients() {
    return this.http.get('http://localhost:3000/patients');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
