import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Side } from "./components/side/side";
import { ClockComponent } from "./components/clock/clock";
import { ProductsComponent } from './components/products/products';

@Component({
  selector: 'app-root',
    standalone: true,  

  imports: [Header, Footer, ProductsComponent,  RouterOutlet, ClockComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('task2');

    showClock = false;

  toggleClock() {
    this.showClock = !this.showClock;
  }
}
