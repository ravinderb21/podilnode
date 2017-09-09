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
import { PhotoComponent } from './components/photo/photo.component';
import { ProfileComponent } from './components/profile/profile.component';

import { UserService } from './services/user.service';
import { AuthService } from './auth/auth.service';
import { PhotoService } from './services/photo.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    HomeComponent,
    CallbackComponent,
    ProfileComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ 
    UserService,
    AuthService,
    PhotoService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
