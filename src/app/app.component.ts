import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  even = 0;
  odd = 1;

  onTickTock() {
    this.counter++;

    if (this.counter % 2 === 0) {
      this.even = this.counter;
    } else {
      this.odd = this.counter;
    }
  }
}
