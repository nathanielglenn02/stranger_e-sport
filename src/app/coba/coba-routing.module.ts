import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CobaPage } from './coba.page';

const routes: Routes = [
  {
    path: '',
    component: CobaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CobaPageRoutingModule {}
