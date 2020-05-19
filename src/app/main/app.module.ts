import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WorldMapComponent } from '../world-map/world-map.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, WorldMapComponent, SearchBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
