import {Routes} from '@angular/router';
import {LoginComponent} from './Auth/components/login';

export const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: '**', component: LoginComponent},
];
