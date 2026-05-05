import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private http = inject(HttpClient)

  host = "http://localhost:3000"


  getpatients() {
    return this.http.get(this.host + "/patient")
  }

  storepatient(data: any) {
    return this.http.post(this.host + "/patient", data);

  }

  FinPatient(id: any) {
    return this.http.get(this.host + "/patient/" + id);

  }













}