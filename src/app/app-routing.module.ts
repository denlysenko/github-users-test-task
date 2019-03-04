import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitUsersPageComponent } from './modules/git-users/containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'git-users'
  },
  {
    path: 'git-users',
    component: GitUsersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
