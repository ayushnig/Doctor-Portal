import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AmplifyAngularModule, AmplifyService, AmplifyIonicModule } from 'aws-amplify-angular';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
// import { AlertComponent } from './directives/index';
import { AuthGuard } from './guard/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    FullCalendarModule,
    AmplifyAngularModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    AmplifyService,
    AmplifyAngularModule,
    AmplifyIonicModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
