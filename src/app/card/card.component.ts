import { Component, OnInit } from '@angular/core';
import {Personne} from '../Model/Personne';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  personne: Personne;
  constructor() {
    this.personne = new Personne(
                                1,
                                12345678,
                              'sellaouti',
                           'aymen',
                               'Teacher',
                              'as.jpg'
    );
  }

  ngOnInit() {
  }

}
