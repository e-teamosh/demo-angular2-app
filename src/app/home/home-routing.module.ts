import {Routes, RouterModule} from "@angular/router";
import {WfHomeComponent} from "./home.component";
import {WfAuthGuardService} from "../common/services/auth-guard.service";
import {NgModule} from "@angular/core";
import {WfWeatherComponent} from "./weather/weather.component";

const wfHomeRoutes: Routes = [
  {
    path: 'home',
    canActivate: [WfAuthGuardService],
    children: [
      {
        path: '',
        component: WfHomeComponent
      },
      {
        path: 'weather/:cityId',
        component: WfWeatherComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(wfHomeRoutes)],
  exports: [RouterModule]
})
export class WfHomeRoutingModule {
}
