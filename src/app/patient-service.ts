import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private http = inject(HttpClient)
  host = "http://localhost:3000"
  
  getPatients() {
    return this.http.get(`${this.host}/patients`)
  }

  storePatients(patient: any) {
    return this.http.post(this.host + '/patients', patient)
  }

  findPatient(id:any) {
    return this.http.get(this.host + '/patients/' + id)
  }

  updatePatient(id:any, patient:any) {
    return this.http.put(`${this.host}/patients/${id}`, patient)
  }

  deletePatient(id:any) {
    return this.http.delete(`${this.host}/patients/${id}`)
  }
}
