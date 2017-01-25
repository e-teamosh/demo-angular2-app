import {
  Component,
  OnInit
} from '@angular/core';
import { Planets } from './common/planets.model';
import { PlanetsService } from './common/planets.service'

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  planetsList: Planets[] = [];
  selectedPlanet: Planets;

  constructor(private _planetsService: PlanetsService) {}

  ngOnInit(): void {
    this._planetsService.getPlanets()
      .then(planets => this.planetsList = planets);
    this.selectedPlanet = new Planets();
  }

  showPlanetInfo(selPlanet): void {
    this.selectedPlanet = selPlanet;
  }

}
