import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Injectable, inject } from '@angular/core';

@Injectable({ // @ s'appele une annotation
=======
import { inject, Injectable } from '@angular/core';

@Injectable({
>>>>>>> c32d3e2a57c68826cf651a6a275aa59833059823
  providedIn: 'root',
})
export class PatientService {
  private http = inject(HttpClient)

<<<<<<< HEAD
  host = 'http://127.0.0.1:8000/api'; // C'est le lien qui pointe vers le backend de l'application depuis notre base de donnée

  getPatients(){ // Cette methode utilise le service HttpClient pour effectuer une requete GET vers l'URL 'http://localhost:8000/api/patients' et retourne un Observable qui contient la réponse de la requete. L'observable est ensuite utilisé dans la methode ngOnInit pour récupérer les données des patients et les stocker dans l'attribut Patients2.
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
=======
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
>>>>>>> c32d3e2a57c68826cf651a6a275aa59833059823
