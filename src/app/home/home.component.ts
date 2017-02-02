import {Component, OnInit} from "@angular/core";
import {CityService} from "../common/services/city.service";
import {WFHttpService} from "../core/http-client/services/http.service";

@Component({
  moduleId: module.id,
  selector: 'wf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: WFHttpService,
              private cityService: CityService) {
  }

  ngOnInit(): void {
    this.cityService.getAllCityListFromJson()
      .then(result => {
        console.dir(result);
        return this.cityService.getCountriesFromCityList();
      })
      .then(result => {
        console.dir(result);
        return this.cityService.getCityListByQuery('Bos', 'US');
      })
      .then(result => console.dir(result));

    this.http.get('weather?q=London')
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }
}
