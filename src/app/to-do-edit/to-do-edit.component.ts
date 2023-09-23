import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-do-edit',
  templateUrl: './to-do-edit.component.html',
  styleUrls: ['./to-do-edit.component.css'],
})
export class ToDoEditComponent {
  constructor(private tasksService: TasksService) {}

  onSubmit(taskForm: NgForm) {
    this.tasksService.addTasks(taskForm.value.task);
    taskForm.reset();
  }

  // onKeyEnterAddTask(inputTask: HTMLInputElement) {
  //   if (inputTask.value === '') alert('Please write a task 📝');
  //   else this.tasksService.addTasks(inputTask.value);
  //   inputTask.value = '';
  // }
}
