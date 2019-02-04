import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromesseService {
  promesse: Promise<any>;
  observable = new Observable(
    (observer) => {
      let i = 5;
      setInterval(() => {
        if (i) {
          observer.next(i--);
        } else {
          observer.complete();
        }
      }, 1000);
    }
  );
  images = [
    'as.jpg',
    'skan.jpg'
  ];
  i = this.images.length - 1;
  imgObservable = new Observable<string>((observer) => {
    setInterval(() => {
      let img = 'assets/images/' + this.images[this.i];
      this.i--;
      if (this.i < 0 ) {
        this.i = this.images.length - 1;
      }
      observer.next(img);
    }, 1500 );
  })
  constructor() {
    this.promesse = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('something');
        }, 1000);
    } );
  }
  catchPromesse() {
    this.promesse.then(
      (x) => {
        setTimeout(function () {
          console.log(x);
        }, 500);
      }
    );
  }
}
