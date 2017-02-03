import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class WfSpinnerService {
  spinner: Subject<boolean>;

  constructor() {
    this.spinner = new Subject<boolean>();
  }

  addSpinner(): void {
    this.spinner.next(true);
  }

  removeSpinner(): void {
    this.spinner.next(false);
  }
}
