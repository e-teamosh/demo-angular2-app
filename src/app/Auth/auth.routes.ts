import {Routes} from '@angular/router';

import {LoginComponent} from './components/login';
import {SignupComponent} from './components/signup';

export const authRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];
