import {Injectable} from '@angular/core';
import {MdSnackBar, MdSnackBarConfig} from "@angular/material";

@Injectable()
export class NotificationService {
  private config: MdSnackBarConfig;

  constructor(
    private mdSnackBar: MdSnackBar
  ) {
    this.config = new MdSnackBarConfig();
    this.config.duration = 2000;
  }

  showError(error: Error): void {
    this.mdSnackBar.open(error.message, '', this.config);
  }

}
