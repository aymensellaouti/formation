import { Injectable } from '@angular/core';
import {Todo} from '../Model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  mesTodos: Todo[];
  constructor() {
    this.mesTodos = [
      {name: 'Lundi', description: 'Préparer cours'},
      {name: 'Mardi', description: 'Angular'},
    ];
  }
  getTodos(): Todo[] {
    return this.mesTodos;
  }
  logTodos(): void {
    console.log(this.mesTodos);
  }
  addTodo(nom, description) {
    const todo = new Todo(nom, description);
    this.mesTodos.push(todo);
  }
  deleteTodo(todo: Todo) {
    const index = this.mesTodos.indexOf(todo);
    this.mesTodos.splice(index, 1);
  }
}
