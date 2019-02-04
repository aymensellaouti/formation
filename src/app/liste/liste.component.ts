import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/Personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  personnes: Personne[];
  @Output() sendPersonne = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(
        1,
        12345678,
        'sellaouti',
        'aymen',
        'Teacher',
        'as.jpg',
        36
      ),
      new Personne(
        1,
         7112018,
        'sellaouti',
        'skander',
        'Bébé',
        'skan.jpg',
        0
      )
    ];
  }
  selectPersonne(personne: Personne ) {
    console.log(personne);
    this.sendPersonne.emit(personne);
  }

}
