import { Injectable } from '@angular/core';
import {Personne} from './Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[];
  constructor() {
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
        2,
        7112018,
        'sellaouti',
        'skander',
        'Bébé',
        'skan.jpg',
        0
      )
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }
  addPersonne(): void {
  }
}
