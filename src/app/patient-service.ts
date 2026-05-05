import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private http = inject(HttpClient)


  getpatients() {
    return this.http.get("http://localhost:3000/patient");

  }


}
