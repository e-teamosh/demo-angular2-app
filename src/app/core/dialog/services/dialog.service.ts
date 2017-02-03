import {Injectable, ViewContainerRef} from "@angular/core";
import {MdDialog, MdDialogRef, MdDialogConfig} from "@angular/material";
import {WfConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {Observable} from "rxjs";

@Injectable()
export class WfDialogService {
  constructor(private mdDialog: MdDialog) {
  }

  confirm(title: string, message: string, viewContainerRef: ViewContainerRef): Observable<boolean> {
    let mdDialogRef: MdDialogRef<WfConfirmDialogComponent>;
    let mdDialogConfig = new MdDialogConfig();
    mdDialogConfig.viewContainerRef = viewContainerRef;
    mdDialogConfig.disableClose = true;

    mdDialogRef = this.mdDialog.open(WfConfirmDialogComponent, mdDialogConfig);

    mdDialogRef.componentInstance.title = title;
    mdDialogRef.componentInstance.message = message;

    return mdDialogRef.afterClosed();
  };
}
