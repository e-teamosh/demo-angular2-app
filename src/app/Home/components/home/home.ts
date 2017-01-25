import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {Planets} from "../../../commons/models";
import {PlanetsService} from "../../../commons/services";

@Component({
  selector: 'home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit {
  planetsList: Planets[] = [];
  selectedPlanet: Planets;

  constructor(private router: Router,
              private planetsService: PlanetsService) {}

  ngOnInit(): void {
    this.planetsService.getPlanets()
      .then(planets => this.planetsList = planets);
    this.selectedPlanet = new Planets();
  }

  logout(): void {
    this.router.navigate(['./login']);
    console.log("Logout");
  }

  showPlanetInfo(selPlanet): void {
    this.selectedPlanet = selPlanet;
  }

}
