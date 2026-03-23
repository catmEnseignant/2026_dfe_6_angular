import { Component } from '@angular/core';
import { PatientComponent } from '../patient/patient.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-sidebar',
  imports: [ContentComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

}
