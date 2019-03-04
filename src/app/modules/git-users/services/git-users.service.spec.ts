import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { GitUser, SearchResult } from '../models/git-user.model';
import { API_URL, GitUsersService } from './git-users.service';

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

const response: SearchResult = {
  incomplete_results: false,
  items: users,
  total_count: 1
};

describe('GitUsersService', () => {
  let service: GitUsersService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GitUsersService]
    }).compileComponents();

    service = TestBed.get(GitUsersService);
    http = TestBed.get(HttpTestingController);
  }));

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('search()', () => {
    const TERM = 'country';

    it('should send correct request', fakeAsync(() => {
      service.search(TERM).subscribe();

      const req = http.expectOne(`${API_URL}?q=location:${TERM}`);

      expect(req.request.method).toBe('GET');
      req.flush(response);
      tick();
    }));

    it('should transform returned data', fakeAsync(() => {
      service.search(TERM).subscribe(res => {
        expect(res).toEqual(users);
      });

      const req = http.expectOne(`${API_URL}?q=location:${TERM}`);

      expect(req.request.method).toBe('GET');
      req.flush(response);
      tick();
    }));

    it('should return error if request failed', fakeAsync(() => {
      const error = { statusText: 'not found', status: 404 };

      service.search(TERM).subscribe(
        () => {},
        err => {
          expect(err.status).toEqual(404);
          expect(err.statusText).toEqual(error.statusText);
        }
      );

      const req = http.expectOne(`${API_URL}?q=location:${TERM}`);
      expect(req.request.method).toBe('GET');

      req.error(new ErrorEvent('server error'), error);
      tick();
    }));
  });
});
