import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
// import { AuthGuard } from './common/auth.guard';

const homeRoutes: Routes = [
  // { path: 'home',   component: home, canActivate: [AuthGuard] },
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
