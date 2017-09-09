import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { AuthService } from '../../auth/auth.service';

import { Photo } from '../../models/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  user_id: string = 'google-oauth2|106757069084437388045';
  photos: Photo[];

  constructor(private _photoService: PhotoService,
    public auth: AuthService) { 
    this._photoService.getPhotos(this.user_id)
      .subscribe((photos) => {
        console.log(photos);
      });
  }

  ngOnInit() {
  }

}
