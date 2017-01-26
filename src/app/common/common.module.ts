import {NgModule} from "@angular/core";
import {PlanetsService} from "./services/planets.service";
import {UsersService} from "./services/users.service";

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    PlanetsService,
    UsersService
  ],
})
export class CommonModule {
}
