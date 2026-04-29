import { Component } from '@angular/core';
import { Content } from '../content/content';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [Content,RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

}
