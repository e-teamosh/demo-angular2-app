import {Injectable} from "@angular/core";
import {WfCoord} from "../models/coord.model";
import {URLSearchParams, Request} from "@angular/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class WfGoogleMapsService {
  getStaticMapUrl(coord: WfCoord): string {
    let searchParams = new URLSearchParams();
    searchParams.set('key', environment.googleApiKey);
    searchParams.set('zoom', '14');
    searchParams.set('size', '640x480');
    searchParams.set('markers', [coord.getLatitude(), coord.getLongitude()].join(','));

    let request = new Request({
      url: 'https://maps.googleapis.com/maps/api/staticmap',
      search: searchParams
    });
    return request.url;
  }
}
