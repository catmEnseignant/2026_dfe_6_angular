import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { Navbar } from './layouts/navbar/navbar'; // Importation du composant Navbar
import { Sidebar } from './layouts/administration/sidebar/sidebar';
import { Footer } from './layouts/footer/footer';

@Component({
  selector: 'app-root', // c'est le nom du composant
  imports: [RouterOutlet, Navbar, Sidebar, Footer], // c'est les composants qui sont utilisés dans ce composant
  templateUrl: './app.html', // C'est le fichier html de ce selecteur
  styleUrl: './app.css' // C'est le fichier css
=======
import { Patient } from './patient/patient';
import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [Navbar, Sidebar ,Footer ],
  templateUrl: './app.html',
  styleUrl: './app.css'
>>>>>>> c32d3e2a57c68826cf651a6a275aa59833059823
})
export class App {
  protected readonly title = signal('my-app');
}
<<<<<<< HEAD
=======

>>>>>>> c32d3e2a57c68826cf651a6a275aa59833059823
