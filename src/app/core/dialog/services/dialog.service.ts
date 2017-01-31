import {Injectable, ViewContainerRef} from "@angular/core";
import {MdDialog, MdDialogRef, MdDialogConfig} from "@angular/material";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {Observable} from "rxjs";

@Injectable()
export class DialogService {
  constructor(private dialog: MdDialog) {
  }

  confirm(title: string, message: string, viewContainerRef: ViewContainerRef): Observable<boolean> {
    let dialogRef: MdDialogRef<ConfirmDialogComponent>;
    let config = new MdDialogConfig();
    config.viewContainerRef = viewContainerRef;
    config.disableClose = true;

    dialogRef = this.dialog.open(ConfirmDialogComponent, config);

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  };
}
