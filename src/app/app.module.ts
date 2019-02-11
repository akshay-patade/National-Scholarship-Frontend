import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentLoginComponent } from './Student/student-login.component';
import { StudentRegistrationComponent } from './Student/student-registration.component';
import { InstituteRegistrationComponent } from './Institute/institute-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    InstituteRegistrationComponent,
    StudentRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
