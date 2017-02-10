import {NgModule} from "@angular/core";
import {WfHomeRoutingModule} from "./home-routing.module";
import {WfHomeComponent} from "./home.component";
import {WfCommonModule} from "../common/common.module";
import {WfCityService} from "./services/city.service";
import {WfGoogleMapsService} from "./services/google-maps.service";
import {WfWeatherService} from "./services/weather.service";

@NgModule({
  declarations: [
    WfHomeComponent
  ],
  imports: [
    WfCommonModule,
    WfHomeRoutingModule
  ],
  providers: [
    WfCityService,
    WfGoogleMapsService,
    WfWeatherService
  ],
  exports: [WfHomeComponent],
  entryComponents: [WfHomeComponent]
})
export class WfHomeModule {
}
