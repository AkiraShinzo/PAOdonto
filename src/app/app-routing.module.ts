import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'agendar-consulta',
    loadChildren: () => import('./pages/agendar-consulta/agendar-consulta.module').then( m => m.AgendarConsultaPageModule)
  },
  {
    path: 'historico-consuta',
    loadChildren: () => import('./pages/historico-consuta/historico-consuta.module').then( m => m.HistoricoConsutaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
