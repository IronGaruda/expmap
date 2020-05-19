import { Component, VERSION, Input, Output } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  recentRegion = null;
  public handleOutput($event) {
    this.recentRegion = $event;
    console.log(this.recentRegion);
  }
}
