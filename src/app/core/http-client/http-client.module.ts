import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {requetsOptionsProvider} from "./services/default-request-options.service";
import {CustomHttpService} from "./services/custom-http.service";

@NgModule({
  imports: [HttpModule],
  exports: [],
  declarations: [],
  providers: [
    CustomHttpService,
    requetsOptionsProvider
  ]
})
export class HttpClientModule {
}
