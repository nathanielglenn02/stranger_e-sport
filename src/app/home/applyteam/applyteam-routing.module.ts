import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyteamPage } from './applyteam.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyteamPage
  },  {
    path: 'newapplyteam',
    loadChildren: () => import('./newapplyteam/newapplyteam.module').then( m => m.NewapplyteamPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyteamPageRoutingModule {}
