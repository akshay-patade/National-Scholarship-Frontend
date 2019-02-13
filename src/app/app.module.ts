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
<<<<<<< HEAD
import { ScholarshipApplicationService } from './Scholarship-Application-Form/scholarship-application.service';
import { ScholarshipApplicationComponent } from './Scholarship-Application-Form/scholarship-application.component';
=======
import { HomePageComponent } from './Homepage/homepage.component';
>>>>>>> 7bec09a76a982f29d6ec3e0f8217429104741b4e

@NgModule({
  declarations: [
    AppComponent,
    InstituteRegistrationComponent,
    StudentRegistrationComponent,
    InstituteLoginComponent,
<<<<<<< HEAD
    ScholarshipApplicationComponent
=======
    HomePageComponent
>>>>>>> 7bec09a76a982f29d6ec3e0f8217429104741b4e

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
<<<<<<< HEAD
  providers: [HttpClient,StudentService,InstituteService,ScholarshipApplicationService],
=======
  providers: [HttpClient, StudentService, InstituteService],
>>>>>>> 7bec09a76a982f29d6ec3e0f8217429104741b4e
  bootstrap: [AppComponent]
})
export class AppModule { }
