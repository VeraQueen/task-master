import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HoverEffectsService } from 'src/app/hover-effects.service';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-important-tasks',
  templateUrl: './important-tasks.component.html',
  styleUrls: ['./important-tasks.component.css'],
})
export class ImportantTasksComponent implements OnInit, OnChanges {
  @Input() tasks: string[] = [];

  constructor(
    private tasksService: TasksService,
    private hoverService: HoverEffectsService
  ) {}

  ngOnInit() {
    if (!this.tasksService.importantTasks) {
      this.tasksService.importantTasks = [];
    } else {
      this.tasksService.importantTasks = this.tasks;
    }
  }

  ngOnChanges() {
    this.tasksService.importantTasks = this.tasks;
  }

  onMarkRegular(id: number) {
    this.tasksService.markRegular(id);
  }

  onMarkDone(id: number) {
    this.tasksService.markDoneFromImportant(id);
  }

  onDelete(id: number) {
    this.tasksService.deleteTaskFromImportant(id);
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
