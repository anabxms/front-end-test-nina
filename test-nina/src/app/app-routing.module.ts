import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplaintListComponent } from './complaint-list/complaint-list.component';

const routes: Routes = [
    { path: 'complaints', component: ComplaintListComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }