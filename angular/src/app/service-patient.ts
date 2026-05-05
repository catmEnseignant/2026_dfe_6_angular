import { Injectable ,inject} from '@angular/core';
import { HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PatientService {

  private http = inject(HttpClient);


  getPatients() {
    return this.http.get<any[]>("http://localhost:3000/patients");
  }


  
  
}