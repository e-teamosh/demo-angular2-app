import {Component, OnInit} from "@angular/core";
import {Planet} from "../common/models/planet.model";
import {CityService} from "../common/services/city.service";
import {PlanetsService} from "../common/services/planets.service";
import {WFHttpService} from "../core/http-client/services/http.service";

@Component({
  moduleId: module.id,
  selector: 'wf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  planetsList: Planet[] = [];
  selectedPlanet: Planet;

  constructor(private planetsService: PlanetsService,
              private http: WFHttpService,
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
        return this.cityService.getCityListByQuery('new Y', 'US');
      })
      .then(result => console.dir(result));

    this.planetsService.getPlanets()
      .then(planets => this.planetsList = planets);
    this.selectedPlanet = new Planet();

    this.http.get('weather?q=London')
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  showPlanetInfo(selPlanet: Planet): void {
    this.selectedPlanet = selPlanet;
  }

}
