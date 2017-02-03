import {NgModule} from "@angular/core";
import {WfAuthGuardService} from "./services/auth-guard.service";
import {WfCanDeactivateGuardService} from "./services/can-deactivate-guard.service";
import {WfCityService} from "./services/city.service";
import {WfUsersService} from "./services/users.service";

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    WfAuthGuardService,
    WfCanDeactivateGuardService,
    WfCityService,
    WfUsersService
  ]
})
export class WfCommonModule {
}
