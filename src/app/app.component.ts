import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddElements: number[] = [];
  evenElements: number[] = [];

  handleNumberGeneratedEvent(n: number){
    console.log("handling event: " + n);

    if(n%2 === 0) {
      console.log("handling even event: " + n);
      this.evenElements.push(n);

    } else {
      console.log("handling odd event: " + n);
      this.oddElements.push(n);

    }
  }
}
