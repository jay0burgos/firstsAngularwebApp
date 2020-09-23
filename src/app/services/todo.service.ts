import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import {Todo} from '../models/Todo'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
          //of type string
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos'; 
  
  constructor(private http:HttpClient) { }
              //this will be the return type
  getTodos():Observable<Todo[]>{
                        //^this specifies the type of Observable
            //in todo format, so an array
    return this.http.get<Todo[]>(this.todosUrl); //takes in a string parameter
                  //since this is a get request for info
  }
}
