import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "@angular/material";
import {WfAsyncButtonComponent} from "./async-button/async-button.component";
import {WfSpinnerService} from "./services/spinner.service";
import {WfGlobalSpinnerComponent} from "./global-spinner/global-spinner.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    WfAsyncButtonComponent,
    WfGlobalSpinnerComponent
  ],
  declarations: [
    WfAsyncButtonComponent,
    WfGlobalSpinnerComponent
  ],
  providers: [WfSpinnerService],
})
export class WfSpinnerControlsModule {
}
