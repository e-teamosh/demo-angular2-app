import {
  Component,
  OnInit
} from '@angular/core';
import { Planets } from './shared/planets.model';
import { PlanetsService } from './shared/planets.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  planetsList: Planets[] = [];

  constructor(
    private _planetsService: PlanetsService) {}

  ngOnInit(): void {
    this._planetsService.getPlanets()
      .then(planets => this.planetsList = planets);
  }

}
