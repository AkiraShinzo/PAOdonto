import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoConsutaPage } from './historico-consuta.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoConsutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoConsutaPageRoutingModule {}
