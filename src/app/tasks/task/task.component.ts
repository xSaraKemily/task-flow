import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterFace } from '../../resources/tasks/task.model';


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input({required: true}) public task!: TaskInterFace;

  @Output() public onComplete: EventEmitter<number> = new EventEmitter();
}
