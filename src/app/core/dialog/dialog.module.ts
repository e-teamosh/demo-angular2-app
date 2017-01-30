import {NgModule} from "@angular/core";
import {ConfirmDialogComponent} from "./confirmDialog/confirm-dialog.component";
import {DialogService} from "./services/dialog.service";
import {MaterialModule} from "@angular/material";

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
