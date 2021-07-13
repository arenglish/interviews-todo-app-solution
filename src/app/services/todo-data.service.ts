import { Injectable } from '@angular/core';
import { Todo } from '../shared/models/todo.model';
import { LOCAL_STORAGE_KEYS } from '../shared/constants/local-storage-keys';
import { isArray, remove } from 'lodash';
import { Observable, timer } from 'rxjs';
import { first, map, shareReplay } from 'rxjs/operators';

@Injectable()
export class TodoDataService {
  private _getTodosFromLocalStorage(): Todo[] {
    let todos: Todo[];

    try {
      todos = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEYS[LOCAL_STORAGE_KEYS.todos])
      );
    } catch (err) {
      todos = [];
    }

    return isArray(todos) ? todos : [];
  }

  private _simulateRequestLag(): Observable<any> {
    return timer(2000).pipe(first());
  }
  getTodos(): Observable<Todo[]> {
    return this._simulateRequestLag().pipe(
      map(() => this._getTodosFromLocalStorage()),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  saveTodo(todo: Todo): Observable<Todo> {
    return this._simulateRequestLag().pipe(
      map(() => {
        localStorage.setItem(
          LOCAL_STORAGE_KEYS[LOCAL_STORAGE_KEYS.todos],
          JSON.stringify([...this._getTodosFromLocalStorage(), todo])
        );

        return todo;
      })
    );
  }

  deleteTodo(todoId: number): Observable<boolean> {
    return this._simulateRequestLag().pipe(
      map(() => {
        const todos = this._getTodosFromLocalStorage();
        const numberOfTodos = todos.length;
        remove(todos, (todo) => todo.id === todoId);

        localStorage.setItem(
          LOCAL_STORAGE_KEYS[LOCAL_STORAGE_KEYS.todos],
          JSON.stringify(todos)
        );

        return todos.length !== numberOfTodos;
      })
    );
  }
}
