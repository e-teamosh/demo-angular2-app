import {NgModule} from "@angular/core";
import {WfToolbarComponent} from "./toolbar.component";
import {WfLogoutButtonComponent} from "./logout-button.component.ts/logout-button.component";
import {WfLoggedUserNameComponent} from "./logged-user-name/logged-user-name.component";
import {WfCommonModule} from "../common/common.module";

@NgModule({
  imports: [
    WfCommonModule
  ],
  exports: [
    WfToolbarComponent,
    WfLoggedUserNameComponent,
    WfLogoutButtonComponent
  ],
  declarations: [
    WfToolbarComponent,
    WfLoggedUserNameComponent,
    WfLogoutButtonComponent
  ],
  providers: []
})
export class WfToolbarModule {
}
