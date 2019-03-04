import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatTableModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

import { components } from './components';
import { containers } from './containers';
import { GitUsersService } from './services/git-users.service';

@NgModule({
  declarations: [...containers, ...components],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [GitUsersService]
})
export class GitUsersModule {}
