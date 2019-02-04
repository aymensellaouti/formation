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
        this.cvService.getPersonneById(id).subscribe(
          (personne) => {
            console.log(personne);
            this.personne = personne;
          },
          (error) => {
            console.log('erreur personne non identifié');
            this.router.navigate(['/']);
          }
        );
      }
    );
  }
  deletePerson(personne: Personne): void {
    this.cvService.deletePersonne(personne.id).subscribe(
      (success) => {
        console.log('success');
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        alert(`Problème avec le serveur veuillez contacter l'admin`);
      }
    );
  }

}
