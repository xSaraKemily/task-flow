import { Component, inject, Input, input, ViewChild, viewChild } from '@angular/core';
import { UserInterface } from '../../resources/user/user.model';
import { TaskComponent } from '../task/task.component';
import { DUMMY_TASKS } from '../../resources/tasks/dummy-tasks';
import { TaskInterFace } from '../../resources/tasks/task.model';
import { CreateTaskDialogComponent } from '../../create-task-dialog/create-task-dialog/create-task-dialog.component';
import { getCurrentTheme } from '../../helpers/theme.helper';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskComponent, CreateTaskDialogComponent],
  templateUrl: './tasks-list.component.html',
})
export class TasksListComponent {
  @Input({required: true}) public selectedUser!: UserInterface;

  public tasks: TaskInterFace[] = DUMMY_TASKS;
  public show!: boolean;

  public get selectedUserTasks(): TaskInterFace[] {
    return this.tasks.filter((task) => task.user_id === this.selectedUser.id);
  }

  public deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id != id);
  }

  public openCreatioonDialog(): void {
    getCurrentTheme();
  }
}
