import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medecinservice } from '../../medecinservice';

@Component({
  selector: 'app-medecin',
  imports: [],
  templateUrl: './medecin.html',
  styleUrl: './medecin.css',
})
export class Medecin implements OnInit{
  medecin:any=[]
    constructor(
      private router:Router,
      private medecinservice:Medecinservice
  ){

}
  
  ngOnInit(): void {
    console.log("tester la methode")
    this.medecinservice.getMedecin().subscribe(res => {
      console.log(res)
      this.medecin=res;
    });
  }

  ajoutmedecin(){
    this.router.navigate(['/form-medecin'])
  }
  modifieMedecin(id:any){
    console.log("tester la methode",id);
    this.router.navigate(['/edit-medecin',id])
  }
  deleteMedecin(id:any){
    this.medecinservice.deleteMedecin(id).subscribe(res => {
      console.log(res)
      this.router.navigate(['/medecin'])
    });
  } 

}
