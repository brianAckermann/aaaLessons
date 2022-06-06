import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  timer;
  counter = 0;

  @Output() numberGeneratedEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartClick() {
    console.log("start clicked");

    this.timer = setInterval( () => {
      this.counter += 1;
      console.log(this.counter);
      this.numberGeneratedEvent.emit(this.counter);
    },750)
  }

  onStopClick() {
    console.log("stop clicked");
    clearInterval(this.timer);
  }
}
