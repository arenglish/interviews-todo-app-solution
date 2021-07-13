import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoDataService } from './services/todo-data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    TodoDataService,
    {
      provide: APP_INITIALIZER,
      deps: [TodoDataService],
      multi: true,
      useFactory: (todoDataService: TodoDataService) => () =>
        todoDataService.getTodos(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
