import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { HoverEffectsService } from 'src/app/hover-effects.service';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.css'],
})
export class DoneTasksComponent implements OnInit, OnChanges {
  @Input() tasks: string[] = [];

  constructor(
    private tasksService: TasksService,
    private hoverService: HoverEffectsService
  ) {}

  ngOnInit() {
    if (!this.tasksService.doneTasks) {
      this.tasksService.doneTasks = [];
    } else {
      this.tasksService.doneTasks = this.tasks;
    }
  }

  ngOnChanges() {
    this.tasksService.doneTasks = this.tasks;
  }

  onRecycle(id: number) {
    this.tasksService.recycleTask(id);
  }

  onDelete(id: number) {
    this.tasksService.deleteTaskFromDone(id);
  }

  onMouseLeaveDelete(event: Event) {
    this.hoverService.onHoverDelete(event);
  }

  onMouseEnterDelete(event: Event) {
    this.hoverService.onHoverDelete(event);
  }
}
