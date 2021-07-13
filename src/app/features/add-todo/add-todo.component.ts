import { Component } from '@angular/core';
import { TodoDataService } from '../../services/todo-data.service';
import { TodosMock } from '../../services/todos.mock';
import { first, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../services/state.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  constructor(
    private todoDataService: TodoDataService,
    private stateService: AppState,
    private router: Router,
    private ar: ActivatedRoute
  ) {}

  addTodo() {
    this.todoDataService
      .saveTodo(TodosMock[0])
      .pipe(
        switchMap(() => this.stateService.loadTodos()),
        tap(() => this.router.navigate(['..'], { relativeTo: this.ar }))
      )
      .subscribe();
  }
}
