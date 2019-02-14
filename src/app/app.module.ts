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
import { InstituteLoginComponent } from './Institute/institute-login.component';
import { HomePageComponent } from './Homepage/homepage.component';
import { ScholarshipApplicationComponent } from './Scholarship-Application-Form/scholarship-application.component';
import { ScholarshipApplicationService } from './Scholarship-Application-Form/scholarship-application.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    HomePageComponent,
    InstituteRegistrationComponent,
    ScholarshipApplicationComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient,StudentService,ScholarshipApplicationService,InstituteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
