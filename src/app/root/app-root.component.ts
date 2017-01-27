import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {LoggedUser} from "../common/models/logged-user.model";
import {AuthService} from "../auth/services/auth.service";
import {UsersService} from "../common/services/users.service";

@Component({
  moduleId: module.id,
  selector: 'wf-app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.scss']
})
export class AppRootComponent implements OnInit {
  loggedUser: LoggedUser;

  constructor(private router: Router,
              private authService: AuthService,
              private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.loggedUser = this.usersService.getLoggedUser();
  }

  isAuthorized(): boolean {
    return this.authService.isAuthorized();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['./login']);
    console.log("Logout");
  }

}
