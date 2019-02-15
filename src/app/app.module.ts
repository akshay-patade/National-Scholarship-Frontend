import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegistrationComponent } from './Student/student-registration.component';
import { InstituteRegistrationComponent } from './Institute/institute-registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StudentService } from './Student/student-service';
import { InstituteService } from './Institute/institute-service';

import { ScholarshipApplicationService } from './Scholarship-Application-Form/scholarship-application.service';
import { ScholarshipApplicationComponent } from './Scholarship-Application-Form/scholarship-application.component';

import { HomePageComponent } from './Homepage/homepage.component';


import { StudentLoginComponent } from './Student/student-login.component';
import { HeaderComponent } from './Homepage/header.component';
import { FooterComponent } from './Homepage/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { InstiStateMinistryComponent } from './InstiStateMinistry/insti.state.ministry.component';
import { StudentLoginService } from './Student/student-login-service';


const appRoutes: Routes= [
  {path:'home-page',component:HomePageComponent},
  {path:'student-login',component:StudentLoginComponent},
  {path:'other-login',component:InstiStateMinistryComponent},
  {path:'student-registration',component:StudentRegistrationComponent},
  {path:'institute-registration',component:InstituteRegistrationComponent},

  
]


@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    ScholarshipApplicationComponent,
    HomePageComponent,
    InstituteRegistrationComponent,
    StudentLoginComponent,
    HeaderComponent,
    FooterComponent,
    InstiStateMinistryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    ),
    AppRoutingModule
  ],

  providers: [HttpClient,StudentLoginService,StudentService,InstituteService,ScholarshipApplicationService ],

  bootstrap: [AppComponent]
})


export class AppModule { }
