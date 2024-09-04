import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CobaPageRoutingModule } from './coba-routing.module';

import { CobaPage } from './coba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CobaPageRoutingModule
  ],
  declarations: [CobaPage]
})
export class CobaPageModule {}
