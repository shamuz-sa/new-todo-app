import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  serviceUrl : string = "http://localhost:8000/tasks/get_tasks/";

  constructor(private http: HttpClient) { }

  addTask(todo: Todo):Observable<Todo>{
    return this.http.post<Todo>(this.serviceUrl, todo);
  }

  getAllTask():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.serviceUrl);
  }
}
