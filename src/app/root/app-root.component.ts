import {Component, OnInit} from "@angular/core";

import {User} from "../common/models/user.model";
import {UsersService} from "../common/services/users.service";

@Component({
  moduleId: module.id,
  selector: 'wf-app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.scss']
})
export class AppRootComponent implements OnInit {
  private loggedUser: User;

  constructor(
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.loggedUser = this.usersService.getLoggedUser();
  }

}
