import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user_id: string;

  constructor( public auth: AuthService ) { 
    if(this.auth.isAuthenticated()) {
      console.log("in navbar ts, authenticated and user_id initialized...");
    }
  }

  ngOnInit() {
  }

}
