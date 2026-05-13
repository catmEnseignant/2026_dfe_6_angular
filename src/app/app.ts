import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/administration/navbar/navbar';
import { Sidebar } from './layout/administration/sidebar/sidebar';
import { Footer } from './layout/administration/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first_app_angular');
}
