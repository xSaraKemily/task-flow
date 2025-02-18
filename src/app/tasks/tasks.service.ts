import { TaskInterFace } from './../resources/tasks/task.model';
import { Injectable } from "@angular/core";
import { uuid } from "../helpers/general.helper";
import { DUMMY_TASKS } from '../resources/tasks/dummy-tasks';

@Injectable({ providedIn: 'root' })
export class TasksService {


      private tasks!: TaskInterFace[];

    public constructor() {
      this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : [];

      if (!this.tasks.length) {
        this.tasks = DUMMY_TASKS;
        this.updateCache();
      }
    }

    public getUserTasks(userId: number): TaskInterFace[] {
        return this.tasks.filter(task => task.user_id === userId);
    }

    public addTask(taskData: TaskInterFace): void {
        taskData.id = uuid();

        this.tasks.push(taskData);
        this.updateCache();
    }

    public deleteTask(taskId: string): void {
        this.tasks = this.tasks.filter(task => task.id != taskId);

        this.updateCache();
    }

    private updateCache(): void {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}