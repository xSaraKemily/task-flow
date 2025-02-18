import { Component, inject, Input, input, ViewChild, viewChild } from '@angular/core';
import { UserInterface } from '../../resources/user/user.model';
import { TaskComponent } from '../task/task.component';
import { type TaskInterFace } from '../../resources/tasks/task.model';
import { CreateTaskDialogComponent } from '../../create-task-dialog/create-task-dialog/create-task-dialog.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskComponent, CreateTaskDialogComponent],
  templateUrl: './tasks-list.component.html',
})
export class TasksListComponent {
  @ViewChild(CreateTaskDialogComponent) public createTaskDialogComponent!: CreateTaskDialogComponent;

  @Input({required: true}) public selectedUser!: UserInterface;

  public constructor(public tasksService: TasksService) {}

  public get selectedUserTasks(): TaskInterFace[] {
    return this.tasksService.getUserTasks(this.selectedUser.id);
  }

  public openCreationDialog(): void {
    this.createTaskDialogComponent.openModal(this.selectedUser.id);
  }
}
