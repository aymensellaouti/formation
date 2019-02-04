import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Model/todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];
  name = '';
  description = '';
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
  addTodo(nom, desc) {
    this.todoService.addTodo(this.name, this.description);
    nom.value = '';
    desc.value = '';
  }
}
