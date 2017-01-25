import {Component, OnInit} from "@angular/core";
import {UsersService} from "../../commons/services/users";
import {User} from "../../commons/models/user";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app-root.html',
  styleUrls: ['app-root.scss']
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
