import { Component, OnInit, Input } from '@angular/core';
import { Todo} from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo; //passes in todo 
  constructor() { }

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
      todo.completed = true;
    }

    onDelete(todo){
      console.log('delete');
    }
}
