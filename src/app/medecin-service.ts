import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Medecin {
  id?: number | string;
  prenom: string;
  nom: string;
  specialite: string;
  email: string;
  telephone?: string;
}

@Injectable({
  providedIn: 'root',
})
export class MedecinService {
  private baseUrl = 'http://localhost:3000/medecins';

  constructor(private http: HttpClient) {}

  getMedecins(): Observable<Medecin[]> {
    return this.http.get<Medecin[]>(this.baseUrl);
  }

  getMedecin(id: number): Observable<Medecin> {
    return this.http.get<Medecin>(`${this.baseUrl}/${id}`);
  }

  createMedecin(medecin: Medecin): Observable<Medecin> {
    return this.http.post<Medecin>(this.baseUrl, medecin);
  }

  updateMedecin(id: number, medecin: Medecin): Observable<Medecin> {
    return this.http.put<Medecin>(`${this.baseUrl}/${id}`, medecin);
  }

  deleteMedecin(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
