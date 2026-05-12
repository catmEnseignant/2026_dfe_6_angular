import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private http = inject(HttpClient);

  //URL centralisée qui contient l'attribut(host) de la classe on 
  host = "http://localhost:3000";

  getPatients() {
    return this.http.get<any[]>(this.host + "/patients");
  }

  StorePatient(data: any) {

   return this.http.post(this.host + "/patients", data);//on appel la variable de la  classe
     
  
  }

  FinPatient(id:any){
    return this.http.get(this.host + "/patients/" + id);


  }

  UpdatePatient(id:any, data:any){
    console.log('texter la methode edit', data);
    return this.http.put(this.host + "/patients/" + id , data);

  }

  DeletePatient(id:any){
    console.log(id ,'texte')
    return this.http.delete(this.host + "/patients/" + id);

  }
  
}
