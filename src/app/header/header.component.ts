import { Component, OnInit } from '@angular/core';
import {CvService} from '../cv.service';
import {distinctUntilChanged, map, throttleTime} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Personne} from '../Model/Personne';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private cvService: CvService,
    private router: Router
    ) {}
  results: Personne [];
  ngOnInit() {
    this.results = [];
  }

  find(search) {
    this.cvService.findByName(search).subscribe(
      (reponse) => {
          this.results = reponse;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  goToDetails(id, searchInput) {
    console.log('here');
    this.results = [];
    searchInput.value = '';
    const link = ['cv/detail', id];
    this.router.navigate(link);
  }

}
