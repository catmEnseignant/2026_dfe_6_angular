import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({ // @ s'appele une annotation
  providedIn: 'root',
})
export class PatientService {
  private http = inject(HttpClient)

  host = 'http://localhost:3000';

  getPatients(){ // Cette methode utilise le service HttpClient pour effectuer une requete GET vers l'URL 'http://localhost:3000/patients' et retourne un Observable qui contient la réponse de la requete. L'observable est ensuite utilisé dans la methode ngOnInit pour récupérer les données des patients et les stocker dans l'attribut Patients2.
    return this.http.get(this.host + '/patients');
  }

  storePatient(data:any){
    return this.http.post(this.host + '/patients', data);

  }

  findPatient(id:any){
    return this.http.get(this.host + '/patients/' + id);

  }

  updatePatient(id:any,data:any){
    console.log("Test update Patient", id);
    console.log("Test update Patient", data);
    return this.http.put(this.host + '/patients/' + id, data);
  }

  deletePatient(id:any){
    console.log("Test delete Patient", id);
    return this.http.delete(this.host + '/patients/' + id);
  }
}
