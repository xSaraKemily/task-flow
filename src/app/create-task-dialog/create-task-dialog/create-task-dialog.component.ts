import { bootstrapApplication } from '@angular/platform-browser';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { TasksService } from '../../tasks/tasks.service';
import { InputLabelComponent } from '../../ui/input-label/input-label.component';
import { CommonModule } from '@angular/common';
import { TaskInterFace } from '../../resources/tasks/task.model';

enum ModalModeEnum {
  VIEW = 'VIEW',
  CREATE = 'CREATE'
}

@Component({
  selector: 'app-create-task-dialog',
  imports: [FormsModule, InputLabelComponent, CommonModule],
  templateUrl: './create-task-dialog.component.html',
})
export class CreateTaskDialogComponent {
  @ViewChild('modal') private modal!: ElementRef;
  @ViewChild(NgForm) private form!: NgForm;

  public constructor(private tasksService: TasksService) {}

  public task!: TaskInterFace;
  public mode!: ModalModeEnum;

  private selectedUserId!: number;

  public openModal(selectedUserId: number, task?: TaskInterFace): void {
    this.selectedUserId = selectedUserId;

    this.mode = task ? ModalModeEnum.VIEW : ModalModeEnum.VIEW;

    this.bindTaskOnOpenModal(task);

    this.modal.nativeElement.showModal();
  }

  public closeModal(): void {
    this.form.form.enable();
    this.clearTask();
    this.form.reset();

    this.modal.nativeElement.close();
  }

  public inputHasError(ngModel: NgModel): boolean {
    return !!(ngModel.hasError('required') && ngModel.dirty);
  }

  public onSave(): void {
    this.task.user_id = this.selectedUserId;
    this.tasksService.addTask(this.task);
    
    this.closeModal();
  }

  public isViewMode(): boolean {
    return this.mode == ModalModeEnum.VIEW;
  }

  private clearTask(): void {
    this.task = {due_date: '', summary: '', title: ''};
  }

  private bindTaskOnOpenModal(task?: TaskInterFace): void {
    if (task) {
      this.task = JSON.parse(JSON.stringify(task));

      setTimeout(() => {
        this.form.form.disable();
      });

      return;
    }

    this.clearTask();
  }
}
