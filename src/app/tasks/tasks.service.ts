import { Injectable } from "@angular/core";
import { uuid } from "../helpers/general.helper";
import { TaskInterFace } from "../resources/tasks/task.model";

@Injectable({ providedIn: 'root' })
export class TasksService {
    private tasks: TaskInterFace[] = [
        {
          id: '1',
          user_id: 1,
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          due_date: '2025-12-31',
        },
        {
          id: '2',
          user_id: 3,
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          due_date: '2024-05-31',
        },
        {
          id: '3',
          user_id: 3,
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
            due_date: '2024-06-15',
        },
      ];

    public getUserTasks(userId: number): TaskInterFace[] {
        return this.tasks.filter(task => task.user_id === userId);
    }

    public addTask(taskData: TaskInterFace): void {
        taskData.id = uuid();

        this.tasks.push(taskData);
    }

    public deleteTask(taskId: string): void {
        this.tasks = this.tasks.filter(task => task.id != taskId);
    }
}