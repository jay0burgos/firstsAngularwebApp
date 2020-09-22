import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo' //the .. allows the path to exit todos then exit components and then find models 

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[]; //an array of Todo objects

  constructor() { }//dont use constructor for much it is basically used to import services

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: "To do 1",
        completed: false
      },
      {
        id: 2,
        title: "To do 2",
        completed: true
      },
      {
        id: 3,
        title: "To do 3",
        completed: false
      },
      {
        id: 4,
        title: "To do 4",
        completed: false
      },

    ]


  }

}
