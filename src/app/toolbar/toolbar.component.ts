import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {LoggedUser} from "../common/models/logged-user.model";
import {AuthService} from "../auth/services/auth.service";
import {UsersService} from "../common/services/users.service";

@Component({
  moduleId: module.id,
  selector: 'wf-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  loggedUser: LoggedUser;

  constructor(private router: Router,
              private authService: AuthService,
              private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.loggedUser = this.usersService.getLoggedUser();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['./login']);
    console.log("Logout");
  }

  get isAuthorized(): boolean {
    return this.authService.isAuthorized();
  }
}
