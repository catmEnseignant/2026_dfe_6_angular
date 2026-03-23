//cette ligne est pour importer les modules nécessaires pour créer un composant Angular, utiliser des signaux et inclure d'autres composants dans le template de l'application.
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  //importation de tous les composants qui seront utilisés dans le template de l'application.
  imports: [ Navbar,Sidebar,Footer], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
//la classe App est la classe principale de l'application Angular. Elle contient une propriété title qui est un signal, utilisée pour stocker le titre de l'application.
export class App {
  //la propriété title est initialisée avec la valeur 'my-app'. Cette valeur peut être utilisée dans le template de l'application pour afficher le titre de l'application.
  protected readonly title = signal('my-app');
}
