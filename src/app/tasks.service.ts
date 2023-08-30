export class TasksService {
  toDoTasks: string[];
  importantTasks: string[];
  doneTasks: string[];

  addTasks(task: string) {
    this.toDoTasks.push(task);
  }

  markImportant(id: number) {
    this.importantTasks.push(this.toDoTasks[id]);
    this.toDoTasks.splice(id, 1);
  }

  markRegular(id: number) {
    this.toDoTasks.push(this.importantTasks[id]);
    this.importantTasks.splice(id, 1);
  }

  markDoneFromImportant(id: number) {
    this.doneTasks.push(this.importantTasks[id]);
    this.importantTasks.splice(id, 1);
  }

  markDoneFromAllTasks(id: number) {
    this.doneTasks.push(this.toDoTasks[id]);
    this.toDoTasks.splice(id, 1);
  }

  recycleTask(id: number) {
    this.toDoTasks.push(this.doneTasks[id]);
    this.doneTasks.splice(id, 1);
  }

  deleteTaskFromAllTasks(id: number) {
    this.toDoTasks.splice(id, 1);
  }

  deleteTaskFromImportant(id: number) {
    this.importantTasks.splice(id, 1);
  }

  deleteTaskFromDone(id: number) {
    this.doneTasks.splice(id, 1);
  }

  deleteAll() {
    this.toDoTasks.splice(0);
    this.importantTasks.splice(0);
    this.doneTasks.splice(0);
  }
}
