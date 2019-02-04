import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit, OnChanges {

  @Input() dataExterne: any;
  @Output()sonEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
    console.log('dataExterne', this.dataExterne);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes);
  }
  sendValue() {
    this.sonEvent.emit('son value');
  }

}
