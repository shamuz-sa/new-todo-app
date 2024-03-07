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

  // addTask(task: Task):Observable<Task>{
  //   return this.http.post<Task>(this.serviceUrl, task);
  // }

  getAllTask():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.serviceUrl);
  }
}
