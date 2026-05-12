import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  // apiUrl est une variable qui contient l'URL de l'API backend pour les patients. Elle est utilisée dans les methodes storePatient et getPatients pour envoyer des requetes HTTP vers le backend.
  private apiUrl = 'http://localhost:4000/patients';
  
  constructor(private http: HttpClient) { }
  
  storePatient(data: any) {
    return this.http.post(this.apiUrl, data );
  }
  
  getPatients() {
    return this.http.get(this.apiUrl);
  }

  FindPatient(id: any) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updatPatient(id: any, data: any) {
    console.log("test update", data);
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

   deletePatient(id: any) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

}