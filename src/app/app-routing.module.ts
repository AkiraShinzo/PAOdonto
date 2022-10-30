import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'agendar-consulta',
    loadChildren: () => import('./pages/agendar-consulta/agendar-consulta.module').then( m => m.AgendarConsultaPageModule)
  },
  {
    path: 'historico-consulta',
    loadChildren: () => import('./pages/historico-consulta/historico-consulta.module').then( m => m.HistoricoConsultaPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'agendar-consulta2',
    loadChildren: () => import('./pages/agendar-consulta2/agendar-consulta2.module').then( m => m.AgendarConsulta2PageModule)
  },
  {
    path: 'pagamento',
    loadChildren: () => import('./pages/pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  },
  {
    path: 'finalizar',
    loadChildren: () => import('./pages/finalizar/finalizar.module').then( m => m.FinalizarPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
