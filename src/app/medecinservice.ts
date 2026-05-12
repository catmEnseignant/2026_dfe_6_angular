
import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Medecinservice {
  private http=inject(HttpClient)
  host="http://localhost:3000"

  getMedecin(){
    return this.http.get(this.host+"/medecins")
  } 
  
  storeMedecin(data:any){
    return this.http.post(this.host+"/medecins",data)
  } 
  findMedecin(id:any){
    return this.http.get(this.host+"/medecins/"+id)
  }
  updateMedecin(id:any,data:any){
    return this.http.put(this.host+"/medecins/"+id,data)
  }
  deleteMedecin(id:any){
    return this.http.delete(this.host+"/medecins/"+id)
  }

  
}
