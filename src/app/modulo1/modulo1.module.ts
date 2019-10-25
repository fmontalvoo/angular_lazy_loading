import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo1RoutingModule } from './modulo1-routing.module';
import { Modulo1ComponentComponent } from './modulo1-component/modulo1-component.component';

@NgModule({
  declarations: [Modulo1ComponentComponent],
  imports: [
    CommonModule,
    Modulo1RoutingModule
  ]
})
export class Modulo1Module { }
