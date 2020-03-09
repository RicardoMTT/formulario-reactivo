import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
  },
  { 
    path: 'stars', loadChildren: () => import('./components/stars/list-start/list-start.module').then(m => m.ListStartModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
