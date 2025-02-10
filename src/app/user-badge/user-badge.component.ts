import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInterface } from '../resources/user/user.model';

@Component({
  selector: 'app-user-badge',
  imports: [CommonModule],
  templateUrl: './user-badge.component.html',
})
export class UserBadgeComponent {
  @Input({required: true}) public user!: UserInterface;
  @Input() public isSelected?: boolean;
  
  public isHovered!: boolean;

  public getImagePath(avatar: string): string {
    return 'assets/users-avatars/' + avatar;
  }
}
