import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {WfAuthGuardService} from "./services/auth-guard.service";
import {WfCanDeactivateGuardService} from "./services/can-deactivate-guard.service";
import {WfUsersService} from "./services/users.service";
import {WfSpinnerControlsModule} from "./spinner-controls/spinner-controls.module";
import {PipesModule} from "./pipes/pipes.module";

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
    WfSpinnerControlsModule,
    PipesModule
  ],
  declarations: [],
  providers: [
    WfAuthGuardService,
    WfCanDeactivateGuardService,
    WfUsersService
  ]
})
export class WfCommonModule {
}
