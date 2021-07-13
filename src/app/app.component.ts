import { Component } from '@angular/core';
import { TodoDataService } from './services/todo-data.service';
import { TodosMock } from './services/todos.mock';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo';
  constructor(private todoDataService: TodoDataService) {}
  addTodoClicked() {
    this.todoDataService.saveTodo(TodosMock[0]).pipe(first()).subscribe();
  }
}
