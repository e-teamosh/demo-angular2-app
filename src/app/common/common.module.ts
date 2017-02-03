import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {WfAuthGuardService} from "./services/auth-guard.service";
import {WfCanDeactivateGuardService} from "./services/can-deactivate-guard.service";
import {WfCityService} from "./services/city.service";
import {WfUsersService} from "./services/users.service";
import {WfFormControlsModule} from "./form-controls/form-controls.module";

@NgModule({
  imports: [
    MaterialModule.forRoot()
  ],
  exports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    WfFormControlsModule
  ],
  declarations: [],
  providers: [
    WfAuthGuardService,
    WfCanDeactivateGuardService,
    WfCityService,
    WfUsersService
  ]
})
export class WfCommonModule {
}
