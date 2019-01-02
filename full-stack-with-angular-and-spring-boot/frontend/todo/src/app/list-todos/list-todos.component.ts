import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {getResponseURL} from '@angular/http/src/http_utils';
import {Router} from '@angular/router';
import {BasicAuthenticationService} from "../service/basic-authentication.service";

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message: string;
  todos: Todo[];
  //   = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit India', false, new Date())
  //   // {id : 1, description : 'Learn to Dance'},
  //   // {id : 2, description : 'Become an expert at Angular'},
  //   // {id : 3, description : 'Visit India'}
  // ];

  username = this.basicAuthenticationService.getAuthenticatedUser();

  constructor(
    private service:TodoDataService,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){

    this.service.retrieveAllTodos(this.username).subscribe(
      response => {
        // console.log(response);
        this.todos = response;
      }
    );
  }

  addTodo() {
    this.router.navigate(['todo', -1]);
  }

  updateTodo(id){
    this.router.navigate(['todo', id]);
  }

  deleteTodo(id){

    this.service.deleteTodo(this.username, id).subscribe(
      response => {
        // console.log(response);
        this.message = `Delete ${id} Successful!`;
        this.refreshTodos();
      }
    );
  }
}
