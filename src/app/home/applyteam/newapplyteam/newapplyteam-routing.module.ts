import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewapplyteamPage } from './newapplyteam.page';

const routes: Routes = [
  {
    path: '',
    component: NewapplyteamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewapplyteamPageRoutingModule {}
