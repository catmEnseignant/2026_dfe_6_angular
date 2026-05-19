import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Patient {
  id?: number | string;
  prenom: string;
  nom: string;
  email: string;
  dateNaissance?: string;
  age?: number;
  genre?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private baseUrl = 'http://localhost:8000/api/patients';

  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseUrl);
  }

  getPatient(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.baseUrl}/${id}`);
  }

  createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.baseUrl, patient);
  }

  updatePatient(id: number, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.baseUrl}/${id}`, patient);
  }

  deletePatient(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
