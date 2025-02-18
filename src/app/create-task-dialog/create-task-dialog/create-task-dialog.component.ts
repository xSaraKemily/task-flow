import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { TasksService } from '../../tasks/tasks.service';
import { InputLabelComponent } from '../../ui/input-label/input-label.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-task-dialog',
  imports: [FormsModule, InputLabelComponent, CommonModule],
  templateUrl: './create-task-dialog.component.html',
})
export class CreateTaskDialogComponent {
  @ViewChild('modal') private modal!: ElementRef;
  @ViewChild(NgForm) private form!: NgForm;

  public constructor(private tasksService: TasksService) {}

  public title!: string;
  public summary!: string;
  public dueDate!: string;

  private selectedUserId!: number;

  public openModal(selectedUserId: number): void {
    this.selectedUserId = selectedUserId;

    this.modal.nativeElement.showModal();
  }

  public closeModal(): void {
    this.form.reset();
    this.modal.nativeElement.close();;
  }

  public inputHasError(ngModel: NgModel): boolean {
    return !!(ngModel.hasError('required') && ngModel.dirty);
  }

  public onSave(): void {
    this.tasksService.addTask(
      {
        title: this.title,
        summary: this.summary,
        due_date: this.dueDate,
        user_id: this.selectedUserId
      }
    );

    this.closeModal();
  }
}
