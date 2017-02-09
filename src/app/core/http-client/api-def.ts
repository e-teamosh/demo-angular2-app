import {RequestMethod, Request} from "@angular/http";

export const API = {
  get: {
    cityList: () => new Request({
      method: RequestMethod.Get,
      url: './assets/city-list/city.list.us.json'
    })
  }
};
