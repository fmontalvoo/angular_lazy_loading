import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'mod1',
    loadChildren: () => import('./modulo1/modulo1.module').then(m => m.Modulo1Module)
  },
  {
    path: 'mod2',
    loadChildren: () => import('./modulo2/modulo2.module').then(m => m.Modulo2Module)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
