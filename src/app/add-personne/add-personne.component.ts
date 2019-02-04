import { Component, OnInit } from '@angular/core';
import {Personne} from '../Model/Personne';
import {NgForm} from '@angular/forms';
import {CvService} from '../cv.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {

  personne: Personne;
  constructor(
    private cvService: CvService,
    private router: Router
    ) { }

  ngOnInit() {
    this.personne = new Personne();
  }
  addPersonne(formulaire: NgForm) {
    this.cvService.addPersonne(this.personne);
    const link = ['cv/all'];
    this.router.navigate(link);
  }

}
