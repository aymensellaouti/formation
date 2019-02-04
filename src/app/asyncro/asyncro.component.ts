import { Component, OnInit } from '@angular/core';
import {PromesseService} from '../promesse.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-asyncro',
  templateUrl: './asyncro.component.html',
  styleUrls: ['./asyncro.component.css']
})
export class AsyncroComponent implements OnInit {

  constructor(public promesseService: PromesseService) { }
  observable: Observable<any>;
  ngOnInit() {
    this.observable = this.promesseService.observable;
    this.promesseService.catchPromesse();
    this.promesseService.observable.subscribe(
      (valeur) => {
       console.log(valeur);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('complete :(');
      }
    );
  }

}
