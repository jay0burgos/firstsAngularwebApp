import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import {Todo} from '../../models/Todo' //the .. allows the path to exit todos then exit components and then find models 

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[]; //an array of Todo objects

  constructor( private todoService:TodoService ) { }//dont use constructor for much it is basically used to import/initialize services

  ngOnInit(): void {
    //we have subscribed to the observable which is an async data stream, 
    this.todoService.getTodos().subscribe(todos=>{
      this.todos = todos;                 //^ this is what i am getting in return in a Todo format
      //this is add the returned todos to the array of Todo type 
    });
  }

}
