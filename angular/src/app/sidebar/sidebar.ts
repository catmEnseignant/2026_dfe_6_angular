import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Content } from "../content/content";

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, Content, RouterOutlet],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {}