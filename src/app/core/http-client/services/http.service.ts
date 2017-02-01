import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable()
export class WFHttpService {

  constructor(private http: Http) {
  }

  get(url: string): Promise<any> {
    return this.http.get(this.getFullUrl(url))
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private getFullUrl(url: string): string {
    return environment.apiUrl + url;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
