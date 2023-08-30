import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoAppComponent } from './to-do-list/to-do-list.component';
import { ToDoEditComponent } from './to-do-edit/to-do-edit.component';
import { TasksService } from './tasks.service';
import { ImportantTasksComponent } from './to-do-list/important-tasks/important-tasks.component';
import { DoneTasksComponent } from './to-do-list/done-tasks/done-tasks.component';
import { HoverEffectsService } from './hover-effects.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoAppComponent,
    ToDoEditComponent,
    ImportantTasksComponent,
    DoneTasksComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TasksService, HoverEffectsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
