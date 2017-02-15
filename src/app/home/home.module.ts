import {NgModule} from "@angular/core";
import {WfHomeRoutingModule} from "./home-routing.module";
import {WfHomeComponent} from "./home.component";
import {WfCommonModule} from "../common/common.module";
import {WfCityService} from "./services/city.service";
import {WfGoogleMapsService} from "./services/google-maps.service";
import {WfWeatherService} from "./services/weather.service";
import {WfWeatherComponent} from "./weather/weather.component";
import {WfMainWeatherInfoComponent} from "./weather/main-weather-info/main-weather-info.component";

@NgModule({
  declarations: [
    WfHomeComponent,
    WfWeatherComponent,
    WfMainWeatherInfoComponent
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
  exports: [
    WfHomeComponent,
    WfWeatherComponent,
    WfMainWeatherInfoComponent
  ],
  entryComponents: [WfHomeComponent]
})
export class WfHomeModule {
}
