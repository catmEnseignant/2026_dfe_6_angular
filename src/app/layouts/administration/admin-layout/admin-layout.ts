import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-admin-layout',
  imports: [Navbar, Sidebar, Footer],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {

}
