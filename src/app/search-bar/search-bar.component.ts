import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input() public regionInput = null;
  public navigation = null;

  constructor() { }

  ngOnInit() {
    console.log('input: ', this.regionInput);
  }

}