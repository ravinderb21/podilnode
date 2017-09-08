import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    HomeComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
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
