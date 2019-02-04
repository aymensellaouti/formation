import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  @Input() color = 'red';
  @Input() bgColor = 'yellow';
  size = '24px';
  fontPolice = 'Garamond';
  constructor() { }
  ngOnInit() {
  }
  changeCouleur(couleur) {
    this.color = couleur;
  }
  changeTaille(taille) {
    this.size = taille + 'px';
  }
  changePolice(police) {
    this.fontPolice = police;
  }

}
