import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoConsutaPageRoutingModule } from './historico-consuta-routing.module';

import { HistoricoConsutaPage } from './historico-consuta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoConsutaPageRoutingModule
  ],
  declarations: [HistoricoConsutaPage]
})
export class HistoricoConsutaPageModule {}
