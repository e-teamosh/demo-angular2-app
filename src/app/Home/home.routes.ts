import {Routes} from '@angular/router';
import {HomeComponent} from './components/home';
// import { AuthGuard } from './common/auth.guard';

export const homeRoutes: Routes = [
  // { path: 'home',   component: Home, canActivate: [AuthGuard] },
  {path: 'home', component: HomeComponent},
];
