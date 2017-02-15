import {Injectable} from "@angular/core";
import {Http, Response, Request} from "@angular/http";
import {SPINNER, WfSpinnerService} from "../../../common/spinner-controls/services/spinner.service";

@Injectable()
export class WfHttpService {
  spinnerIndex = SPINNER.GLOBAL;

  constructor(private http: Http,
              private wfSpinnerService: WfSpinnerService) {
  }

  request(request: Request): Promise<any> {
    this.wfSpinnerService.showSpinner(this.spinnerIndex);
    return this.http.request(request)
      .timeout(1000) //TODO: remove timeout
      .toPromise()
      .then(result => {
        this.wfSpinnerService.hideSpinner(this.spinnerIndex);
        return this.extractData(result);
      })
      .catch(error => {
        this.wfSpinnerService.hideSpinner(this.spinnerIndex);
        return this.handleError(error);
      });
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | Error) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return new Error(errMsg);
  }
}
