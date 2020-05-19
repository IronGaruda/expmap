import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {

@Output() regionOutput = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public navigationOutput(regionName: string) {
    this.regionOutput.emit(regionName)
  }

}