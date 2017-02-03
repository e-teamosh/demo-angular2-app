import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";

@Component({
  moduleId: module.id,
  selector: 'wf-confirm-dialog',
  templateUrl: 'confirm-dialog.component.html',
  styleUrls: ['confirm-dialog.component.scss']
})
export class WfConfirmDialogComponent {
  title: string;
  message: string;

  constructor(public mdDialogRef: MdDialogRef<WfConfirmDialogComponent>) {
  }
}
