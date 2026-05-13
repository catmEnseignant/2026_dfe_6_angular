import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Medecinservice } from '../../medecinservice';
import { CommonModule } from '@angular/common';
import { FormGroup,FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-medecin',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-medecin.html',
  styleUrl: './form-medecin.css',
})
export class FormMedecin implements OnInit {
medecin:any
  constructor(
    private route:Router,
    private medecinservice:Medecinservice,
    private activateroute:ActivatedRoute
  ){}


formMedecin=new FormGroup({
  prenom:new FormControl(''),
  nom:new FormControl(''),
  email:new FormControl(''),
  specialite:new FormControl('')
})
  isedit=false
  idmedecin:any
  ngOnInit():void{
    const id = this.activateroute.snapshot.paramMap.get('id')
    console.log(id)
    if (id){
      this.idmedecin=id;
      this.isedit=true
      this.medecinservice.findMedecin(id).subscribe(res=>{
        this.medecin=res
        this.formMedecin.patchValue({
          prenom:this.medecin.prenom,
          nom:this.medecin.nom,
          email:this.medecin.email,
          specialite:this.medecin.specialite
        })
       
        console.log(this.medecin)
      },error=>{
        console.log(error)
      })
    }else{
      this.isedit=false
    }


  }


  inputFormMedecin() {
    if(this.isedit){
      this.medecinservice.updateMedecin(this.idmedecin,this.formMedecin.value).subscribe(res=>{
        console.log(res)
        this.route.navigate(['/medecin'])
      },error=>{
        console.log(error)
      })
      console.log("modifier avec succes")
    }else{
      console.log("tester la methode inputformMedecin")
      console.log(this.formMedecin.value)
      let data =this.formMedecin.value
      this.medecinservice.storeMedecin(data).subscribe(res=>{
        console.log("medecin ajouter avec sucsce")
        this.route.navigate(['/medecin'])
    
      }, error=>{

        console.log("error",error)
      })
    }
  }

}
