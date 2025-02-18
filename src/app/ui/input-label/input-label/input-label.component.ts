import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-label',
  imports: [],
  templateUrl: './input-label.component.html',
})
export class InputLabelComponent {
  @Input({required: true}) public title!: string;
  @Input() public required!: boolean;
}
