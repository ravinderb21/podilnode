import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Request } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private _http: Http) {
    console.log('User service inititalized!');
  }

}
