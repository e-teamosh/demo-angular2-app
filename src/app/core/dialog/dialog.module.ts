import {NgModule} from "@angular/core";
import {MaterialModule} from "@angular/material";
import {ConfirmDialogComponent} from "./confirm-dialog/confirm-dialog.component";
import {DialogService} from "./services/dialog.service";

@NgModule({
  imports: [
    MaterialModule.forRoot()
  ],
  exports: [ConfirmDialogComponent],
  declarations: [ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent],
  providers: [
    DialogService
  ],
})
export class DialogModule {
}
