import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.html',
  styleUrl: './clock.css'
})
export class ClockComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  private intervalId: any;

  ngOnInit(): void {
    this.updateTime();
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
   
  }

  private updateTime() {
    this.currentTime = new Date().toLocaleTimeString();
  }
}
