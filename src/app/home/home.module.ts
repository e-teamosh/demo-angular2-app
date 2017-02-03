import {NgModule} from "@angular/core";
import {WfHomeRoutingModule} from "./home-routing.module";
import {WfHomeComponent} from "./home.component";
import {WfCommonModule} from "../common/common.module";

@NgModule({
  declarations: [
    WfHomeComponent
  ],
  imports: [
    WfCommonModule,
    WfHomeRoutingModule
  ],
  providers: [],
  exports: [WfHomeComponent],
  entryComponents: [WfHomeComponent]
})
export class WfHomeModule {
}
