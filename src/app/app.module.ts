import {NgModule} from "@angular/core";
import {WfAppRootComponent} from "./app-root.component";
import {WfPageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {WfAuthModule} from "./auth/auth.module";
import {WfCommonModule} from "./common/common.module";
import {WfCoreModule} from "./core/core.module";
import {WfHomeModule} from "./home/home.module";
import {WfAppRoutingModule} from "./app-routing.module";
import {WfToolbarModule} from "./toolbar/toolbar.module";

@NgModule({
  declarations: [
    WfAppRootComponent,
    WfPageNotFoundComponent
  ],
  imports: [
    WfAuthModule,
    WfCommonModule,
    WfCoreModule,
    WfHomeModule,
    WfAppRoutingModule,
    WfToolbarModule
  ],
  exports: [
    WfAppRootComponent,
    WfPageNotFoundComponent,
    WfToolbarModule
  ],
  entryComponents: [WfAppRootComponent],
  bootstrap: [WfAppRootComponent]
})
export class WfAppModule {
}
