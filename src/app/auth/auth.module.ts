import {NgModule} from "@angular/core";
import {WfLoginComponent} from "./login/login.component";
import {WfSignupComponent} from "./signup/signup.component";
import {WfAuthService} from "./services/auth.service";
import {WfAuthRoutingModule} from "./auth-routing.module";
import {WfCommonModule} from "../common/common.module";

@NgModule({
  declarations: [
    WfLoginComponent,
    WfSignupComponent
  ],
  imports: [
    WfAuthRoutingModule,
    WfCommonModule
  ],
  providers: [
    WfAuthService
  ],
  exports: [
    WfLoginComponent,
    WfSignupComponent
  ],
  entryComponents: [WfLoginComponent]
})
export class WfAuthModule {
}
