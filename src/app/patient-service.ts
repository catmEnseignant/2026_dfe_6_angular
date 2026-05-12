import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private http = inject(HttpClient) 
  host="http://localhost:3000"

  getPatients(){
    return this.http.get(this.host+"/patients")
  } 
  storepatients(data:any){
    return this.http.post(this.host+"/patients",data)

  }
  findPatient(id:any){
    return this.http.get(this.host+"/patients/"+id)
  }

  updatePatient(id:any,data:any){
    console.log("tester la methode")
    return this.http.get(this.host+"/patients/"+id,data)
  }
  deletePatients(id:any){
    console.log("tester la methode")
    return this.http.delete(this.host+"/patients/"+id)
  }

 
}
