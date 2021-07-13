import { Component } from '@angular/core';
import { TodoDataService } from '../../services/todo-data.service';
import { switchMap } from 'rxjs/operators';
import { map as _map } from 'lodash';
import { forkJoin } from 'rxjs';
import { AppState } from '../../services/state.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos$ = this.stateService.todos$;

  constructor(
    private todoDataService: TodoDataService,
    private stateService: AppState
  ) {}

  clearTodos() {
    this.todos$
      .pipe(
        switchMap((todos) =>
          forkJoin(
            ..._map(todos, (todo) => this.todoDataService.deleteTodo(todo.id))
          )
        ),
        switchMap(() => this.stateService.loadTodos())
      )
      .subscribe();
  }
}
