import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-div-color',
  templateUrl: './div-color.component.html',
  styleUrls: ['./div-color.component.css']
})
export class DivColorComponent implements OnInit, OnChanges {

  constructor() { }
  color = 'yellow';
  ngOnInit() {
  }
  changeColor(color) {
    this.color = color;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('in On changes');
    console.log('OnChanges', changes);
  }

}
