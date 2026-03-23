import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Patient } from './patient/patient';
import { Navbar } from './navbar/navbar';
import { Sedebar } from './sedebar/sedebar';
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [ Navbar, Sedebar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
