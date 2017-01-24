import {
  Component,
  OnInit
} from '@angular/core';
import { Planets } from './shared/planets.model';
import { PlanetsService } from './shared/planets.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  planetsList: Planets[] = [];
  selectedPlanet: Planets;

  constructor(
    private _planetsService: PlanetsService) {}

  ngOnInit(): void {
    this._planetsService.getPlanets()
      .then(planets => this.planetsList = planets);
    this.selectedPlanet = new Planets();
  }

  showPlanetInfo(selPlanet): void {
    this.selectedPlanet = selPlanet;
  }

}
