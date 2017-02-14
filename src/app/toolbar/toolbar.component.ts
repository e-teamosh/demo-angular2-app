import {Component, Input} from "@angular/core";
import {WfAuthService} from "../auth/services/auth.service";
import {MdSidenav} from "@angular/material";

@Component({
  moduleId: module.id,
  selector: 'wf-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class WfToolbarComponent {
  @Input() sideNav: MdSidenav;

  constructor(private wfAuthService: WfAuthService) {
  }

  get isAuthorized(): boolean {
    return this.wfAuthService.isAuthorized();
  }
}
