import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "@angular/material";
import {WfAsyncButtonComponent} from "./async-button/async-button.component";
import {WfSpinnerService} from "./async-button/services/spinner.service";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [WfAsyncButtonComponent],
  declarations: [WfAsyncButtonComponent],
  providers: [WfSpinnerService],
})
export class WfFormControlsModule {
}
