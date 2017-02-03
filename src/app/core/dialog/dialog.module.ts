import {NgModule} from "@angular/core";
import {MaterialModule} from "@angular/material";
import {WfConfirmDialogComponent} from "./confirm-dialog/confirm-dialog.component";
import {WfDialogService} from "./services/dialog.service";

@NgModule({
  imports: [
    MaterialModule
  ],
  exports: [WfConfirmDialogComponent],
  declarations: [WfConfirmDialogComponent],
  entryComponents: [WfConfirmDialogComponent],
  providers: [
    WfDialogService
  ],
})
export class WfDialogModule {
}
