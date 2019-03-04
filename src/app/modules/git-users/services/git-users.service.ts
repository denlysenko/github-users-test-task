import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GitUser, SearchResult } from '../models/git-user.model';

export const API_URL = 'https://api.github.com/search/users';

@Injectable()
export class GitUsersService {
  constructor(private http: HttpClient) {}

  search(term: string): Observable<GitUser[]> {
    return this.http
      .get<SearchResult>(API_URL, {
        params: new HttpParams().set('q', `location:${term}`)
      })
      .pipe(map(res => res.items));
  }
}
