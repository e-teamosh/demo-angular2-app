import {Routes} from '@angular/router';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {SignupComponent} from './signup';
// import { AuthGuard } from './common/auth.guard';

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: '**', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  // { path: 'home',   component: Home, canActivate: [AuthGuard] },
  {path: 'home', component: HomeComponent},
];
