import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewapplyteamPageRoutingModule } from './newapplyteam-routing.module';

import { NewapplyteamPage } from './newapplyteam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewapplyteamPageRoutingModule
  ],
  declarations: [NewapplyteamPage]
})
export class NewapplyteamPageModule {}
