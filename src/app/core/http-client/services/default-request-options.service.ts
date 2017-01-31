import {Injectable} from "@angular/core";
import {BaseRequestOptions, RequestOptions, URLSearchParams} from "@angular/http";
import {environment} from "../../../../environments/environment"

@Injectable()
export class DefaultRequestOptionsService extends BaseRequestOptions {
  constructor() {
    super();
    // Set the default Request Options
    // this.headers.set('Content-Type', 'application/json');

    // Set the default query params
    this.search = new URLSearchParams();
    this.search.set('appid', environment.apiKey)
  }
}

export const requetsOptionsProvider = {
  provide: RequestOptions,
  useClass: DefaultRequestOptionsService
};
