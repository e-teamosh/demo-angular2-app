import {NgModule} from "@angular/core";
import {WfAppRootComponent} from "./app-root.component";
import {WfPageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {WfToolbarComponent} from "./toolbar/toolbar.component";
import {WfAuthModule} from "./auth/auth.module";
import {WfCommonModule} from "./common/common.module";
import {WfCoreModule} from "./core/core.module";
import {WfHomeModule} from "./home/home.module";
import {WfAppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    WfAppRootComponent,
    WfPageNotFoundComponent,
    WfToolbarComponent
  ],
  imports: [
    WfAuthModule,
    WfCommonModule,
    WfCoreModule,
    WfHomeModule,
    WfAppRoutingModule
  ],
  exports: [
    WfAppRootComponent,
    WfPageNotFoundComponent,
    WfToolbarComponent
  ],
  entryComponents: [WfAppRootComponent],
  bootstrap: [WfAppRootComponent]
})
export class WfAppModule {
}
