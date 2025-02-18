import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterFace } from '../../resources/tasks/task.model';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input({required: true}) public task!: TaskInterFace;

  public constructor(public tasksService: TasksService) {}
}
