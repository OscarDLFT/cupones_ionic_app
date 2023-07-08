import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'coupons',
    pathMatch: 'full'
  },
  {
    path: 'coupons',
    loadChildren: () => import('../pages/coupons/coupons.module').then( m => m.CouponsModule)
  },
  {
    path: 'card',
    loadChildren: () => import('../pages/card/card.module').then( m => m.CardModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
