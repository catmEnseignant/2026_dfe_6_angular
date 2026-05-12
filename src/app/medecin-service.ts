import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MedecinService {
  private http = inject(HttpClient)
  host = "http://localhost:3000"

  getMedecins() {
    return this.http.get(`${this.host}/medecins`)
  }

  storeMedecin(medecin:any) {
    return this.http.post(this.host + "/medecins", medecin)
  }

  findId(id:any) {
    return this.http.get(this.host + "/medecins/" + id)
  }

  updateMedecin(id:any, medecin:any) {
    return this.http.put(this.host + "/medecins/" + id, medecin)
  }

  deleteMedecin(id:any) {
    return this.http.delete(this.host + "/medecins/" + id)
  }
}