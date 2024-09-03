import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamMemberPageRoutingModule } from './team-member-routing.module';

import { TeamMemberPage } from './team-member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamMemberPageRoutingModule
  ],
  declarations: [TeamMemberPage]
})
export class TeamMemberPageModule {}
