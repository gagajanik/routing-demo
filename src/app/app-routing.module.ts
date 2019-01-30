import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { EmplyoeListComponent } from './emplyoe-list/emplyoe-list.component';

const routes: Routes = [
  {path: 'departments', component:DepartmentsListComponent},
  {path: 'employees', component: EmplyoeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentsListComponent, EmplyoeListComponent]