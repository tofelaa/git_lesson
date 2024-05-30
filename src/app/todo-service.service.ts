  import {HttpClient} from "@angular/common/http";
  import {Observable} from "rxjs";
  import {Injectable} from "@angular/core";


export interface TodoItemI {
    userId: number;
    id: number;
    title: string;
    completed: string;
  }

  @Injectable({
    providedIn: 'root'
  })
export class TodoServiceService {

  constructor( private http: HttpClient) {

  }

  getTodo(num:number): Observable<TodoItemI>{
    return this.http.get<TodoItemI>('https://jsonplaceholder.typicode.com/todos/'+ num);
  }

}
