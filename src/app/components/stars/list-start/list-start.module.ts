import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListStartRoutingModule } from './list-start-routing.module';
import { ListStartComponent } from './list-start.component';
import { StarService } from '../../star.service';

@NgModule({
  declarations: [ListStartComponent],
  imports: [
    CommonModule,
    ListStartRoutingModule
  ],
  providers:[
    StarService
  ]
})
export class ListStartModule { }
