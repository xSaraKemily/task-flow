import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserBadgeComponent } from "./user-badge/user-badge.component";
import { UserInterface } from './resources/user/user.model';
import { DUMMY_USERS } from './resources/user/dummy-users';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserBadgeComponent, TasksListComponent, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public users: UserInterface[] = DUMMY_USERS;

  public selectedUser: UserInterface|undefined;

  public onUserBadgeClick(user: UserInterface): void {
      this.selectedUser = this.selectedUser?.id === user.id ? undefined : user;
  }
}
