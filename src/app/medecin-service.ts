import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  private apiUrl = 'http://localhost:4000/medecins';
  private http = inject(HttpClient);

  getMedecins(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addMedecin(medecin: any): Observable<any> {
    return this.http.post(this.apiUrl, medecin);
  }

  updateMedecin(id: string, medecin: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, medecin);
  }

  deleteMedecin(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getMedecinById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}