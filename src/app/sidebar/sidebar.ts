import { Component } from '@angular/core';
import { Patient } from '../patient/patient';
import { Content } from "../content/content";
@Component({
  selector: 'app-sidebar',
  imports: [Patient, Content],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

}
