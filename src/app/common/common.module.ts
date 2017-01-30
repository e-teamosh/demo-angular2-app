import {NgModule} from "@angular/core";
import {AuthGuardService} from "./services/auth-guard.service";
import {PlanetsService} from "./services/planets.service";
import {UsersService} from "./services/users.service";

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AuthGuardService,
    PlanetsService,
    UsersService
  ],
})
export class CommonModule {
}
