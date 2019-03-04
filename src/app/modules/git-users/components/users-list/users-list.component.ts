import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { GitUser } from '../../models/git-user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  readonly displayedColumns = ['avatar', 'login', 'account_url'];

  @Input() users: GitUser[];
}
