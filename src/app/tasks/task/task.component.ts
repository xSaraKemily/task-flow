import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterFace } from '../../resources/tasks/task.model';
import { CommonModule, DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
import { TruncateTextPipe } from '../../pipes/truncate-text.pipe';


@Component({
  selector: 'app-task',
  imports: [DatePipe, TruncateTextPipe, CommonModule],
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input({required: true}) public task!: TaskInterFace;

  @Output() public onViewTask: EventEmitter<TaskInterFace> = new EventEmitter();
  @Output() public onCompleteTask: EventEmitter<TaskInterFace> = new EventEmitter();

  public constructor(public tasksService: TasksService) {}

  public completeTask(): void {
    this.tasksService.deleteTask(this.task.id!);
    this.onCompleteTask.emit();
  }
}
