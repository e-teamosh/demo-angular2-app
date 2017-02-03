import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {WfLoginComponent} from "./login/login.component";
import {WfSignupComponent} from "./signup/signup.component";
import {WfCanDeactivateGuardService} from "../common/services/can-deactivate-guard.service";

const wfAuthRoutes: Routes = [
  {path: 'login', component: WfLoginComponent},
  {path: 'signup', component: WfSignupComponent, canDeactivate: [WfCanDeactivateGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(wfAuthRoutes)],
  exports: [RouterModule]
})
export class WfAuthRoutingModule {
}
