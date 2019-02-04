import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  club = 'barca';
  isBlaugrana = true;
  isRossonero = false;
  isSangetor = false;
  constructor() { }

  ngOnInit() {
  }
  rn() {
    this.isRossonero = true;
    this.isBlaugrana = false;
    this.isSangetor = false;
  }
  so() {
    this.isRossonero = false;
    this.isBlaugrana = false;
    this.isSangetor = true;
  }
  bg() {
    this.isRossonero = false;
    this.isBlaugrana = true;
    this.isSangetor = false;
  }

}
