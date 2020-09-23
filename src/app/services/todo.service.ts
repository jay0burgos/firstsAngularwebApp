import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import {Todo} from '../models/Todo'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
          //of type string
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos'; 
  todoLimits:string = '?_limit=5';
  
  

  constructor(private http:HttpClient) { }
              //this will be the return type
  getTodos():Observable<Todo[]>{
                        //^this specifies the type of Observable
            //in todo format, so an array
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todoLimits}`); //takes in a string parameter
                  //since this is a get request for info
  }

  //toggle completed //passes in a todo of type Todo of course
  toggleCompleted(todo:Todo):Observable<any>{
    const url:string = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  //deletes
  deleteTodo(todo:Todo):Observable<Todo>{
    const url:string = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }
}
