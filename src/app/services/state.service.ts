import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../shared/models/todo.model';
import { TodoDataService } from './todo-data.service';
import { first, tap } from 'rxjs/operators';

@Injectable()
export class AppState {
  constructor(private todoDataService: TodoDataService) {}
  private _todos$: BehaviorSubject<Todo[]> = new BehaviorSubject([]);
  public todos$ = this._todos$.asObservable();

  public loadTodos(): Observable<Todo[]> {
    return this.todoDataService.getTodos().pipe(
      first(),
      tap((todos) => this._todos$.next(todos))
    );
  }
}
