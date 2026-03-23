import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Patient } from '../patient/patient';

@Component({
  selector: 'app-content',
  imports: [RouterOutlet,],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {

}
