import {Injectable} from '@angular/core';

@Injectable()
export class Todo {
  name;
  description;

  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}
