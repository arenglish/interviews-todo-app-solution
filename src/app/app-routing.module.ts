import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoModule } from './features/add-todo/add-todo.module';
import { AddTodoComponent } from './features/add-todo/add-todo.component';
import { TodoListComponent } from './features/todo-list/todo-list.component';
import { TodoListModule } from './features/todo-list/todo-list.module';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
  {
    path: 'add',
    component: AddTodoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AddTodoModule, TodoListModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
