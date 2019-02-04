import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/Personne';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  personnes: Personne[];
  @Output() sendPersonne = new EventEmitter();
  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.cvService.loadPersonnes().subscribe(
      (personnes) => {
        this.personnes = personnes;
      }
    );
  }
  selectPersonne(personne: Personne ) {
    console.log(personne);
    this.sendPersonne.emit(personne);
  }

}
