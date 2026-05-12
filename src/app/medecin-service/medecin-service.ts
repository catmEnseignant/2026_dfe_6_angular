
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MedecinService {

  private http = inject(HttpClient);

  host = "http://localhost:3000";

  getMedecins() {
    return this.http.get<any[]>(this.host + "/medecins");
  }

  StoreMedecin(data: any) {
    return this.http.post(this.host + "/medecins", data);
  }

  FindMedecin(id: any) {
    return this.http.get(this.host + "/medecins/" + id);
  }

  UpdateMedecin(id: any, data: any) {
    return this.http.put(this.host + "/medecins/" + id, data);
  }

  DeleteMedecin(id: any) {
    return this.http.delete(this.host + "/medecins/" + id);
  }
}