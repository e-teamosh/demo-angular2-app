import {Component, OnInit} from "@angular/core";
import {WfLoggedUser} from "../../common/models/user/logged-user.model";
import {WfUsersService} from "../../common/services/users.service";

@Component({
  moduleId: module.id,
  selector: 'wf-logged-user-name',
  templateUrl: './logged-user-name.component.html',
  styleUrls: ['./logged-user-name.component.scss']
})
export class WfLoggedUserNameComponent implements OnInit {
  loggedUser: WfLoggedUser;

  constructor(private wfUsersService: WfUsersService) {
  }

  ngOnInit() {
    this.loggedUser = this.wfUsersService.getLoggedUser();
  }
}
