import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Todo} from '../list-todos/list-todos.component';
import {ActivatedRoute, Router} from '@angular/router';
import {BasicAuthenticationService} from "../service/basic-authentication.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;
  username = this.basicAuthenticationService.getAuthenticatedUser();

  constructor(
    private service: TodoDataService,
    private route: ActivatedRoute,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.todo = new Todo(this.id, '', false, new Date());

    if(this.id != -1 && this.username){
      this.service.retrieveTodo(this.username, this.id).subscribe(
        data => this.todo = data
      );
    }
  }

  saveTodo() {

    if (this.id === -1 && this.username){
      this.service.createTodo (this.username, this.todo).subscribe(
        data => {
          this.router.navigate(['todos']);
        }
      );
    } else {
      this.service.updateTodo(this.username, this.id, this.todo).subscribe(
        data => {
          this.router.navigate(['todos']);
          // console.log(data)
        }
      );
    }
  }
}
