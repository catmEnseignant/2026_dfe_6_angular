import { Component } from '@angular/core';
import { Sidebar } from '../../../sidebar/sidebar';
import { Footer } from '../../../footer/footer';
import { Navbar } from '../../../navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adminlayout',
  imports: [Sidebar,Footer,Navbar,RouterOutlet],
  templateUrl: './adminlayout.html',
  styleUrl: './adminlayout.css',
})
export class Adminlayout {

}
