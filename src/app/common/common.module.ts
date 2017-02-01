import {NgModule} from "@angular/core";
import {AuthGuardService} from "./services/auth-guard.service";
import {CanDeactivateGuardService} from "./services/can-deactivate-guard.service";
import {CityService} from "./services/city.service";
import {PlanetsService} from "./services/planets.service";
import {UsersService} from "./services/users.service";

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AuthGuardService,
    CanDeactivateGuardService,
    CityService,
    PlanetsService,
    UsersService
  ],
})
export class CommonModule {
}
