import { Injectable } from '@angular/core';
import {Personne} from './Model/Personne';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[];
  apiUri = 'http://localhost:3000/api/personnes';

  constructor(private http: HttpClient) {
    this.http.get<Personne []>(this.apiUri).subscribe(
      (personnes) => {
        console.log('here', personnes);
        this.personnes = personnes;
      },
      (error) => {
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
        alert('Fake Data are displayed Problème with API encountered !!');
      }
    );
  }

  getPersonnes(): Personne[] {
    return this.personnes;
  }
  loadPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne []>(this.apiUri);
}
  addPersonne(personne: Personne) {
    return this.http.post(this.apiUri, personne);
  }
  addPersonneInTable(personne: Personne): void {
    const lastId = this.personnes.length - 1;
    personne.id = this.personnes[lastId].id + 1;
    this.personnes.push(personne);
  }
  getPersonneByIdFromTable(id): Personne {
    const personne = this.personnes.find(pers => pers.id == id);
    console.log('personne', personne);
    return personne;
  }
  getPersonneById(id) {
    return this.http.get<Personne>(this.apiUri + `/${id}`);
  }
  deletePersonneFromTab(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    this.personnes.splice(index, 1);
  }
  deletePersonne(id) {
    return this.http.delete(this.apiUri + `/${id}`);
  }
  findByName(name): Observable<Personne[]> {
    const filter = `{"where":{"name":{"like":"%${name}%"}}}`;
    const params = new HttpParams().set('filter', filter);
    return this.http.get<Personne[]>(this.apiUri, {params});
  }
}
