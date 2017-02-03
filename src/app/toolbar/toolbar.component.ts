import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {WfLoggedUser} from "../common/models/logged-user.model";
import {WfAuthService} from "../auth/services/auth.service";
import {WfUsersService} from "../common/services/users.service";

@Component({
  moduleId: module.id,
  selector: 'wf-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class WfToolbarComponent implements OnInit {
  loggedUser: WfLoggedUser;

  constructor(private router: Router,
              private wfAuthService: WfAuthService,
              private wfUsersService: WfUsersService) {
  }

  ngOnInit(): void {
    this.loggedUser = this.wfUsersService.getLoggedUser();
  }

  logout(): void {
    this.wfAuthService.logout();
    this.router.navigate(['./login']);
    console.log("Logout");
  }

  get isAuthorized(): boolean {
    return this.wfAuthService.isAuthorized();
  }
}
