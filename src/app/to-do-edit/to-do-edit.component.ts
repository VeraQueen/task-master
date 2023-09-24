import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TasksService } from '../tasks.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-to-do-edit',
  templateUrl: './to-do-edit.component.html',
  styleUrls: ['./to-do-edit.component.css'],
})
export class ToDoEditComponent implements OnInit, OnDestroy {
  @ViewChild('taskForm', { static: false }) taskForm: NgForm;
  editingSubscription: Subscription;
  editMode = false;
  editedTaskId: number;
  editedTask: string;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.editingSubscription = this.tasksService.startedEditing.subscribe(
      (id: number) => {
        this.editedTaskId = id;
        this.editMode = true;
        this.editedTask = this.tasksService.getToDoTask(id);
        this.taskForm.setValue({
          task: this.editedTask,
        });
      }
    );
  }

  onSubmit(taskForm: NgForm) {
    if (this.editMode) {
      this.tasksService.updateToDoTask(this.editedTaskId, taskForm.value.task);
    } else {
      this.tasksService.addTasks(taskForm.value.task);
    }
    taskForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.editingSubscription.unsubscribe();
  }
}
