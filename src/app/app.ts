import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Patient } from './patient/patient';
import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';
import { Footer } from "./footer/footer";
import { Content } from "./content/content";

@Component({
  selector: 'app-root',
  imports: [Patient, Navbar, Sidebar, Footer, Content],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
