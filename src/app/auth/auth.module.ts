import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";
import {WfLoginComponent} from "./login/login.component";
import {WfSignupComponent} from "./signup/signup.component";
import {WfAuthService} from "./services/auth.service";
import {WfAuthRoutingModule} from "./auth-routing.module";
import {WfFormControlsModule} from "../common/form-controls/form-controls.module";

@NgModule({
  declarations: [
    WfLoginComponent,
    WfSignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    WfAuthRoutingModule,
    WfFormControlsModule
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
