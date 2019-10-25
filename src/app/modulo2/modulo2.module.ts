import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo2RoutingModule } from './modulo2-routing.module';
import { Modulo2ComponentComponent } from './modulo2-component/modulo2-component.component';

@NgModule({
  declarations: [Modulo2ComponentComponent],
  imports: [
    CommonModule,
    Modulo2RoutingModule
  ]
})
export class Modulo2Module { }
