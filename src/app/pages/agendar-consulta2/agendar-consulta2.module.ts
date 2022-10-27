import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarConsulta2PageRoutingModule } from './agendar-consulta2-routing.module';

import { AgendarConsulta2Page } from './agendar-consulta2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarConsulta2PageRoutingModule
  ],
  declarations: [AgendarConsulta2Page]
})
export class AgendarConsulta2PageModule {}
