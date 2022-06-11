import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { BusDetailComponent } from './bus-detail/bus-detail.component';
import { RouteDetailComponent } from './route-detail/route-detail.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ViewFacultyComponent } from './view-faculty/view-faculty.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {
    path:'user-login',
    component:UserLoginComponent
  },
  {
    path:'user-home',
    component:UserHomeComponent
  },
  {
    path:'add-bus',
    component:AddBusComponent
  },
  {
    path:'view-faculty',
    component:ViewFacultyComponent
  },
  {
    path:'view-student',
    component:ViewStudentComponent
  },
  {
    path:'bus-detail',
    component:BusDetailComponent
  },
  {
    path:'route-detail',
    component:RouteDetailComponent
  },

  { path: '',   redirectTo: '/user-login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
