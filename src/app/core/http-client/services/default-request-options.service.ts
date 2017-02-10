import {Injectable} from "@angular/core";
import {BaseRequestOptions, RequestOptions} from "@angular/http";

@Injectable()
export class WfDefaultRequestOptionsService extends BaseRequestOptions {
  constructor() {
    super();
    // Set the default Request Options
    // this.headers.set('Content-Type', 'application/json');

    // Set the default query params
    // this.search = new URLSearchParams();
    // this.search.set('appid', environment.apiKey);
    // let units = new WfUnitsFormat();
    // this.search.set('units', units.fahrenheit);
  }
}

export const REQUEST_OPTIONS_PROVIDER = {
  provide: RequestOptions,
  useClass: WfDefaultRequestOptionsService
};
