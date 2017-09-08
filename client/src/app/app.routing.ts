import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { CallbackComponent } from './components/callback/callback.component';

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
    path: 'callback',
    component: CallbackComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);