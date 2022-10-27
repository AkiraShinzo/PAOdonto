import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarConsulta2Page } from './agendar-consulta2.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarConsulta2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarConsulta2PageRoutingModule {}
