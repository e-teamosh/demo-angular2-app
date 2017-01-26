import {Component, OnInit} from "@angular/core";
import {LoggedUser} from "../common/models/logged-user.model";
import {UsersService} from "../common/services/users.service";

@Component({
  moduleId: module.id,
  selector: 'wf-app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.scss']
})
export class AppRootComponent implements OnInit {
  loggedUser: LoggedUser;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.loggedUser = this.usersService.getLoggedUser();
  }

}
