import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {REQUEST_OPTIONS_PROVIDER} from "./services/default-request-options.service";
import {WfHttpService} from "./services/http.service";

@NgModule({
  imports: [HttpModule],
  exports: [],
  declarations: [],
  providers: [
    WfHttpService,
    REQUEST_OPTIONS_PROVIDER
  ]
})
export class WfHttpClientModule {
}
