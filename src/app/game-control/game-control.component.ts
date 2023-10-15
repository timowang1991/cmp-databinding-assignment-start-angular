import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  setIntervalFn: any;

  @Output()
  counterEventEmitter = new EventEmitter<number>();

  onStartButtonClicked() {
    if (this.setIntervalFn) {
      return;
    }
    this.setIntervalFn = setInterval(() => {
      this.counterEventEmitter.emit();
    }, 1000);
  }

  onStopButtonClicked() {
    if (this.setIntervalFn) {
      clearInterval(this.setIntervalFn);
      this.setIntervalFn = null;
    }
  }
}
