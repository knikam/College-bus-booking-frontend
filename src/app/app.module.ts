import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ViewFacultyComponent } from './view-faculty/view-faculty.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { HeaderComponent } from './header/header.component';
import { BusDetailComponent } from './bus-detail/bus-detail.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { RouteDetailComponent } from './route-detail/route-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserHomeComponent,
    UserDetailComponent,
    ViewFacultyComponent,
    ViewStudentComponent,
    HeaderComponent,
    BusDetailComponent,
    AddBusComponent,
    RouteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
