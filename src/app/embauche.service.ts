import { Injectable } from '@angular/core';
import {Personne} from './Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  embauches: Personne[];
  constructor() {
    this.embauches = [];
  }
  getEmauchees() {
    return this.embauches;
  }
  addEmbauches(personne: Personne) {
    if (this.getEmauchees().indexOf(personne) < 0) {
      this.embauches.push(personne);
    } else {
      alert('Personne déjà ajoutée à la liste des cvs sélectionnés');
    }
  }
}


