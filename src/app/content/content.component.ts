import { Component } from '@angular/core';
import { PatientComponent } from '../patient/patient.component';
import { Router } from 'express';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [RouterOutlet],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
