import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  imports: [CommonModule],
  templateUrl: './patients.html',
  styleUrl: './patients.css',
})
export class Patient implements OnInit {

  patients2: any[] = [];
  title = 'patients';

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getPatient().subscribe((res: any) => {
      console.log(res);
      this.patients2 = res;
    });
  }

  getInfoPatient() {
    this.router.navigate(['/formulaire']); // ✅ FIX
  }

  getPatient() {
    return this.http.get('http://localhost:3000/patients'); // ✅ FIX
  }
}