import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modulo2ComponentComponent } from './modulo2-component/modulo2-component.component';


const routes: Routes = [
  {
    path: ':id',
    component: Modulo2ComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo2RoutingModule { }
