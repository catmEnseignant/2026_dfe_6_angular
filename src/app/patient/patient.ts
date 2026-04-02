import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient implements OnInit, OnDestroy {
  title = 'Patients';
  patients2: any[] = [];
  private destroy$ = new Subject<void>();

  constructor(private route:  Router, private http: HttpClient) {}

  ngOnInit(): void {
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
      next: (res: any[]) => {
        console.log(res);
        this.patients2 = [...res].sort((a: any, b: any) => Number(a.id) - Number(b.id));
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
    return this.http.get<any[]>('http://localhost:3000/patients');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

