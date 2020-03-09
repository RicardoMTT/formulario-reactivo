import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListStartComponent } from './list-start.component';

const routes: Routes = [{ path: '', component: ListStartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListStartRoutingModule { }
