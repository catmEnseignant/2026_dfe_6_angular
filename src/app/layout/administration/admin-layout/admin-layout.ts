import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [Navbar,Sidebar,Footer],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {



}
