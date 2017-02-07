import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import * as _ from "lodash";

export enum SPINNER {
  LOGIN,
  LOGOUT,
  SIGNUP,
  SEARCH
}

@Injectable()
export class WfSpinnerService {
  spinner: {[key: number]: Subject<boolean>};

  constructor() {
    this.spinner = {};
    _.forEach(SPINNER, (item) => {
      this.spinner[item] = new Subject<boolean>();
    });
  }

  showSpinner(index: number): void {
    this.spinner[index].next(true);
  }

  hideSpinner(index: number): void {
    this.spinner[index].next(false);
  }
}
