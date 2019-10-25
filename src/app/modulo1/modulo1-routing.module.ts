import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modulo1ComponentComponent } from './modulo1-component/modulo1-component.component';


const routes: Routes = [
  {
    path: '',
    component: Modulo1ComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo1RoutingModule { }
