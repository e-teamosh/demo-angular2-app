import {Injectable} from "@angular/core";
import {WfCoord} from "../../common/models/weather/coord.model";
import {URLSearchParams, Request} from "@angular/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class WfGoogleMapsService {
  getStaticMapUrl(coord: WfCoord): string {
    let aspectRatio = 1.33;
    let screenWidth = screen.width;
    let mapWidth = screenWidth < 640 ? screenWidth : 640;
    let mapHeight = Math.round(mapWidth / aspectRatio);
    let searchParams = new URLSearchParams();
    searchParams.set('key', environment.googleApiKey);
    searchParams.set('zoom', '14');
    searchParams.set('size', [mapWidth, mapHeight].join('x'));
    searchParams.set('markers', [coord.getLatitude(), coord.getLongitude()].join(','));

    let request = new Request({
      url: 'https://maps.googleapis.com/maps/api/staticmap',
      search: searchParams
    });
    return request.url;
  }
}
