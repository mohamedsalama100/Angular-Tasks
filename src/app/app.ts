import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Products } from "./components/products/products";
import { Side } from "./components/side/side";
import { ClockComponent } from "./components/clock/clock";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Products, Side, RouterOutlet, ClockComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task2');

    showClock = false;

  toggleClock() {
    this.showClock = !this.showClock;
  }
}
