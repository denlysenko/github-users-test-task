import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';

import { of } from 'rxjs';

import { GitUsersService } from '../../services/git-users.service';
import { GitUsersPageComponent } from './git-users-page.component';

describe('GitUsersPageComponent', () => {
  let component: GitUsersPageComponent;
  let fixture: ComponentFixture<GitUsersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [GitUsersPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: GitUsersService,
          useValue: {
            search: jasmine.createSpy('search').and.returnValue(of({}))
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('search()', () => {
    let gitUsersService: GitUsersService;

    beforeEach(() => {
      gitUsersService = TestBed.get(GitUsersService);
    });

    it('should call GitUsersService.search()', fakeAsync(() => {
      const term = 'search_term';

      component.search(term);
      tick();

      expect(gitUsersService.search).toHaveBeenCalledWith(term);
    }));
  });
});
