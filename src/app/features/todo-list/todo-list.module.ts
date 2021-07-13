import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { AppState } from '../../services/state.service';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule],
  providers: [AppState],
})
export class TodoListModule {}
