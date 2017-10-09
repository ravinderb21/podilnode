import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { CallbackComponent } from './components/callback/callback.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PhotoComponent } from './components/photo/photo.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'photo',
    component: PhotoComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
