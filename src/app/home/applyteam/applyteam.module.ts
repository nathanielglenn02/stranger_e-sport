import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyteamPageRoutingModule } from './applyteam-routing.module';

import { ApplyteamPage } from './applyteam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyteamPageRoutingModule
  ],
  declarations: [ApplyteamPage]
})
export class ApplyteamPageModule {}
