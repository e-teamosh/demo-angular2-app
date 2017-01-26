import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Planet} from "../commons/models/planet.model";
import {PlanetsService} from "../commons/services/planets.service";
import {UsersService} from "../commons/services/users.service";

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
              private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.planetsService.getPlanets()
      .then(planets => this.planetsList = planets);
    this.selectedPlanet = new Planet();
  }

  logout(): void {
    this.usersService.clearLoggedUser();
    this.router.navigate(['./login']);
    console.log("Logout");
  }

  showPlanetInfo(selPlanet): void {
    this.selectedPlanet = selPlanet;
  }

}
