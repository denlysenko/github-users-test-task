import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material';

import { GitUser } from '../../models/git-user.model';
import { UsersListComponent } from './users-list.component';

const users: GitUser[] = [
  {
    avatar_url: 'avatar_url',
    events_url: 'events_url',
    followers_url: 'followers_url',
    following_url: 'following_url',
    gists_url: 'gists_url',
    gravatar_id: '',
    html_url: 'html_url',
    id: 1,
    login: 'login',
    node_id: 'node_id',
    organizations_url: 'organizations_url',
    received_events_url: 'received_events_url',
    repos_url: 'repos_url',
    score: 1,
    site_admin: false,
    starred_url: 'starred_url',
    subscriptions_url: 'subscriptions_url',
    type: 'User',
    url: 'url'
  }
];

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule],
      declarations: [UsersListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    component.users = users;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
