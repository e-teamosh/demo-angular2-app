import {Routes} from '@angular/router';
import {HomeComponent} from './home.component';
// import { AuthGuard } from './common/auth.guard';

export const homeRoutes: Routes = [
  // { path: 'home',   component: home, canActivate: [AuthGuard] },
  {path: 'home', component: HomeComponent},
];
