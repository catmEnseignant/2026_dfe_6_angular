import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient implements OnInit
{
  title = 'Patients';


tableauPatients2 :any = [];
 
  constructor(private router: Router,private http:HttpClient) {
    
  }

  ngOnInit(): void {
    console.log ("tester la methode");
    this.getPatients().subscribe(res => {
      console.log (res);
      this.tableauPatients2 = res;
    });
  }

getSomme(a: number, b: number): number{
  return a + b;
}
getEmail():string{
  return"seck@mail.com";
}

getInfoPatient(){
  this.router.navigate(['form']);

}

 getPatients(){
   return this.http.get("http://localhost:3000/patients");
   
 }



}