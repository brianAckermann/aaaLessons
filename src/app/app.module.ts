import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddsComponent } from './odds/odds.component';
import { EvensComponent } from './evens/evens.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddsComponent,
    EvensComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
