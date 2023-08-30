import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';
import { localStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  toDoTasksStorage: string[] = [];
  importantTasksStorage: string[] = [];
  doneTasksStorage: string[] = [];

  constructor(
    private tasksService: TasksService,
    private localService: localStorageService
  ) {}

  keyToDo = 'toDoTasksStorage';
  keyImp = 'impStorage';
  keyDone = 'doneStorage';

  ngOnInit() {
    const dataToDo = this.localService.getData(this.keyToDo);
    const resToDo = JSON.parse(dataToDo);
    if (!resToDo) this.toDoTasksStorage = [];
    else this.toDoTasksStorage = resToDo;
    const dataImp = this.localService.getData(this.keyImp);
    const resImp = JSON.parse(dataImp);
    if (!resImp) this.importantTasksStorage = [];
    else this.importantTasksStorage = resImp;
    const dataDone = this.localService.getData(this.keyDone);
    const resDone = JSON.parse(dataDone);
    if (!resDone) this.doneTasksStorage = [];
    else this.doneTasksStorage = resDone;
  }

  onClickSave() {
    if (!this.tasksService.toDoTasks) {
      this.tasksService.toDoTasks = [];
    } else {
      this.localService.saveData(
        this.keyToDo,
        JSON.stringify(this.tasksService.toDoTasks)
      );
    }
    if (!this.tasksService.importantTasks) {
      this.tasksService.importantTasks = [];
    } else {
      this.localService.saveData(
        this.keyImp,
        JSON.stringify(this.tasksService.importantTasks)
      );
    }
    if (!this.tasksService.doneTasks) {
      this.tasksService.doneTasks = [];
    } else {
      this.localService.saveData(
        this.keyDone,
        JSON.stringify(this.tasksService.doneTasks)
      );
    }
  }

  onClickDeleteAll() {
    this.localService.clearData();
    this.tasksService.deleteAll();
  }
}
