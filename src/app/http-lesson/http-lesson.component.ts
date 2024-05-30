import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoItemI, TodoServiceService} from "../todo-service.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {debounceTime, Observable, of, Subscription, switchMap} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-http-lesson',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './http-lesson.component.html',
  styleUrl: './http-lesson.component.css'
})
export class HttpLessonComponent implements OnDestroy, OnInit{

  public todo: TodoItemI |undefined;
  public mySubs: Subscription | undefined;
  public $todoItem: Observable<TodoItemI>|undefined;
  public todoItems: TodoItemI[] |undefined = [];
  constructor(public todoService: TodoServiceService) {
    this.mySubs = todoService.getTodo(1).subscribe(
    {next: value => console.log('Get value:',value)
   }
  )

    this.$todoItem = todoService.getTodo(2)
  }

  ngOnInit() {
    of(1,2,3).pipe(switchMap(id=>this.todoService.getTodo(id))).subscribe(
      {next: value => {
          this.todoItems?.push(value)
          console.log('value: ',value);
      }
      }
    )
  }

  ngOnDestroy() {
    this.mySubs?.unsubscribe();
}

  logItems() {
    console.log(this.todoItems)
  }
}
