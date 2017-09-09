import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotoService {

  constructor(private _http: Http) { 
    console.log('Photo service initialized...');
  }

  getPhotos(user_id: any) {
    return this._http.get('/api/all/'+user_id)
      .map(res => res);
  }

}