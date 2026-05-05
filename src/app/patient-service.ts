import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Patient } from './patient/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private http = inject(HttpClient);

host ="http://localhost:3000"

  getPatients(){
    return this.http.get(this.host+"/patients")

  }
  //Il envoie les donnes au back-end
  storepatients(data: any){
    return this.http.post(this.host+"/patients",data);
  
  }

  
  
}
