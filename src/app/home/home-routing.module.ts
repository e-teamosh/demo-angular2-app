import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {WfHomeComponent} from "./home.component";
import {WfAuthGuardService} from "../common/services/auth-guard.service";

const wfHomeRoutes: Routes = [
  {path: 'home', component: WfHomeComponent, canActivate: [WfAuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(wfHomeRoutes)],
  exports: [RouterModule]
})
export class WfHomeRoutingModule {
}
