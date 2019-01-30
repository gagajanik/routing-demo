import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { EmplyoeListComponent } from './emplyoe-list/emplyoe-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo:'/departments', pathMatch: 'full'},
  {path: 'departments', component:DepartmentsListComponent},
  {path: 'employees', component: EmplyoeListComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DepartmentsListComponent, 
  EmplyoeListComponent, PageNotFoundComponent
]