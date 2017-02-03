import {NgModule} from "@angular/core";
import {MaterialModule} from "@angular/material";
import {WfAsyncButtonComponent} from "./async-button/async-button.component";

@NgModule({
  imports: [MaterialModule],
  exports: [WfAsyncButtonComponent],
  declarations: [WfAsyncButtonComponent],
  providers: [],
})
export class WfFormControlsModule {
}
