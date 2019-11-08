import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'paneladmin', loadChildren: './paneladmin/paneladmin.module#PaneladminPageModule' },
  { path: 'solicitucredito', loadChildren: './solicitucredito/solicitucredito.module#SolicitucreditoPageModule' },
  { path: 'listusers', loadChildren: './listusers/listusers.module#ListusersPageModule' },
  { path: 'listcredits', loadChildren: './listcredits/listcredits.module#ListcreditsPageModule' },
  { path: 'createuser', loadChildren: './createuser/createuser.module#CreateuserPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
