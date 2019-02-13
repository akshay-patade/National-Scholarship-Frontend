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

@NgModule({
  declarations: [
    AppComponent,
    InstituteRegistrationComponent,
    StudentRegistrationComponent,
    InstituteLoginComponent,
    HomePageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient, StudentService, InstituteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
