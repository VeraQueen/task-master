import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TasksService } from '../tasks.service';
import { HoverEffectsService } from '../hover-effects.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoAppComponent implements OnInit, OnChanges {
  @Input() tasks: string[] = [];

  constructor(
    private tasksService: TasksService,
    private hoverService: HoverEffectsService
  ) {}

  ngOnInit() {
    if (!this.tasksService.toDoTasks) {
      this.tasksService.toDoTasks = [];
    } else {
      this.tasksService.toDoTasks = this.tasks;
    }
  }

  ngOnChanges() {
    this.tasksService.toDoTasks = this.tasks;
  }

  onMarkImportant(id: number) {
    this.tasksService.markImportant(id);
  }

  onMarkDone(id: number) {
    this.tasksService.markDoneFromAllTasks(id);
  }

  onDelete(id: number) {
    this.tasksService.deleteTaskFromAllTasks(id);
  }

  onMouseEnterStar(event: Event) {
    this.hoverService.onHoverStar(event);
  }

  onMouseLeaveStar(event: Event) {
    this.hoverService.onHoverStar(event);
  }

  onMouseEnterDone(event: Event) {
    this.hoverService.onHoverDone(event);
  }

  onMouseLeaveDone(event: Event) {
    this.hoverService.onHoverDone(event);
  }

  onMouseLeaveDelete(event: Event) {
    this.hoverService.onHoverDelete(event);
  }

  onMouseEnterDelete(event: Event) {
    this.hoverService.onHoverDelete(event);
  }
}
