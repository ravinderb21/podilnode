import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';
import { ProfileComponent } from './components/profile/profile.component';

import { UserService } from './services/user.service';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    HomeComponent,
    CallbackComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ 
    UserService,
    AuthService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
