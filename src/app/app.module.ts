import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegistrationComponent } from './Student/student-registration.component';
import { InstituteRegistrationComponent } from './Institute/institute-registration.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StudentService } from './Student/student-service';

@NgModule({
  declarations: [
    AppComponent,
    InstituteRegistrationComponent,
    StudentRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
