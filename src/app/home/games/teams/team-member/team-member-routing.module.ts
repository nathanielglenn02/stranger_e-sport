import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamMemberPage } from './team-member.page';

const routes: Routes = [
  {
    path: '',
    component: TeamMemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamMemberPageRoutingModule {}
