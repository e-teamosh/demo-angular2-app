import {Component, Input} from "@angular/core";
import {WfAuthService} from "../auth/services/auth.service";

@Component({
  moduleId: module.id,
  selector: 'wf-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class WfToolbarComponent {
  @Input() sideNav: any;

  constructor(private wfAuthService: WfAuthService) {
  }

  get isAuthorized(): boolean {
    return this.wfAuthService.isAuthorized();
  }
}
