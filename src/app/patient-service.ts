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

  FinPatient(id:any){
    return this.http.get(this.host+"/patients/"+id,);

  }
<<<<<<< HEAD
  updatePatient(id:any,data:any){
    console.log('texter la methode edit',data);
    return this.http.put(this.host+"/patient/"+id,data);


  }
=======
>>>>>>> 87f88d960374dcef920b7c9ff5deb7c19544f9d8

  
  
}
