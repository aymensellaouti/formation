import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CvService} from '../cv.service';
import {Personne} from '../Model/Personne';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  personne: Personne;
  constructor(private activatedRoute: ActivatedRoute,
              private cvService: CvService,
              private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param) => {
        const id = param['id'] ;
        console.log(id);
        this.personne = this.cvService.getPersonneById(id);
        if (!this.personne) {
          this.router.navigate(['/']);
        }
      }
    );
  }
  deletePerson(personne: Personne): void {
    this.cvService.deletePersonne(personne);
    this.router.navigate(['/']);
  }

}
