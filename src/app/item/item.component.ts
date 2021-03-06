import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/Personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Output() sendSelected =  new EventEmitter();
  @Input() personne: Personne;
  constructor() { }
  ngOnInit() {
  }
  selectPersonne(personne: Personne) {
    this.sendSelected.emit(personne);
  }

}
