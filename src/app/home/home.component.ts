import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Planet} from "../common/models/planet.model";
import {AuthService} from "../auth/services/auth.service";
import {PlanetsService} from "../common/services/planets.service";

@Component({
  moduleId: module.id,
  selector: 'wf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  planetsList: Planet[] = [];
  selectedPlanet: Planet;

  constructor(private router: Router,
              private planetsService: PlanetsService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.planetsService.getPlanets()
      .then(planets => this.planetsList = planets);
    this.selectedPlanet = new Planet();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['./login']);
    console.log("Logout");
  }

  showPlanetInfo(selPlanet): void {
    this.selectedPlanet = selPlanet;
  }

}
