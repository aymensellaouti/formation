import { Injectable } from '@angular/core';
import {Personne} from './Model/Personne';
import {Router} from '@angular/router';

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
  getPersonneById(id): Personne {
    const personne = this.personnes.find(pers => pers.id == id);
    console.log('personne', personne);
    return personne;
  }
  deletePersonne(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    this.personnes.splice(index, 1);

  }
}
