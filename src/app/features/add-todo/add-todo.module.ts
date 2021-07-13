import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { AddTodoComponent } from './add-todo.component';

@NgModule({
  declarations: [TodoFormComponent, AddTodoComponent],
  imports: [CommonModule],
})
export class AddTodoModule {}
