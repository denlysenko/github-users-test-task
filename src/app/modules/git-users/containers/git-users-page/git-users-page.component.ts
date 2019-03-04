import { Component } from '@angular/core';

import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { GitUsersService } from '../../services/git-users.service';

@Component({
  selector: 'app-git-users-page',
  templateUrl: './git-users-page.component.html',
  styleUrls: ['./git-users-page.component.css']
})
export class GitUsersPageComponent {
  searchText$ = new Subject<string>();

  users$ = this.searchText$.pipe(
    switchMap(term => this.gitUsersService.search(term))
  );

  constructor(private readonly gitUsersService: GitUsersService) {}

  search(term: string) {
    this.searchText$.next(term);
  }
}
