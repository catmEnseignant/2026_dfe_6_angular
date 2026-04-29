import { Component } from '@angular/core';
import { Patient } from "../patient/patient";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [Patient,RouterOutlet],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {

}
