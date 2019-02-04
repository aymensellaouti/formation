import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'aymen sellaouti';
  constructor() { }

  ngOnInit() {
  }
  treatForm(formulaire: NgForm) {
    console.log(formulaire);
  }

}
