import { HttpClient } from '@angular/common/http';
import { Injectable, inject} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private http = inject(HttpClient)

  private host = 'http://127.0.0.1:8000/api';

  storeUser(data:any){
    return this.http.post(this.host + '/register', data);
  }
}
