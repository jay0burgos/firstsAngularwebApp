import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

import{TodoService} from '../../services/todo.service'

import { Todo} from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo; //passes in todo 
  //output to parent component, which is todos component
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter; //creates a new event emmiter object
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }
  //set dynamic classes
    setClasses(){
      let classes ={
        todo: true, //always shows
        'is-complete': this.todo.completed //only happen when it is completed, when completed is set to True
      }

      return  classes;
    }

    onToggle(todo) {
      //Toggle in UI
      todo.completed = true;
      //Toggle on server
      this.todoService.toggleCompleted(todo).subscribe(todo =>
        console.log(todo))
    }

    onDelete(todo){
      console.log('delete');
      this.deleteTodo.emit(todo);
    }
}
