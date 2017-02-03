import {NgModule} from "@angular/core";
import {WfSpinnerComponent} from "./spinner.component";
import {MaterialModule} from "@angular/material";
import {WfSpinnerService} from "./services/spinner.service";

@NgModule({
  imports: [
    MaterialModule.forRoot()
  ],
  exports: [WfSpinnerComponent],
  declarations: [WfSpinnerComponent],
  entryComponents: [WfSpinnerComponent],
  providers: [WfSpinnerService]
})
export class WfSpinnerModule {
}
