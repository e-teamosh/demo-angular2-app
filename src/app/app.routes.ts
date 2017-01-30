import {Routes} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";
import {PageNotFoundComponent} from "./pagenotfound/not-found.component";

export const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent},
];
