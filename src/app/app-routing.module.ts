import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScanComponent } from './scan/scan.component';


import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectreasonsComponent } from './projectreasons/projectreasons.component';
import { KitDashboardComponent } from './kit-dashboard/kit-dashboard.component';
import { KitOptionsComponent } from './kit-options/kit-options.component';
import { InProjectComponent } from './in-project/in-project.component';
import { EndProjectComponent } from './end-project/end-project.component';
import {ProfilComponent} from './profil/profil.component';
import {CodeComponent} from './code/code.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'newproject',
    component: NewProjectComponent
  },
  {
    path: 'projectreasons',
    component: ProjectreasonsComponent
  },
  {
    path: 'kitdashboard',
    component: KitDashboardComponent
  },
  {
    path: 'kitoptions',
    component: KitOptionsComponent
  },
  {
  path: 'inproject',
  component: InProjectComponent
  },
  {
    path: 'endproject',
    component: EndProjectComponent
  },
  {
  path: 'profil',
  component: ProfilComponent
  },
  {
    path: 'code',
component: CodeComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
