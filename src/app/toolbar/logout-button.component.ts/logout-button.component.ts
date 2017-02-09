import {Component, Input} from "@angular/core";
import {SPINNER} from "../../common/services/spinner.service";
import {Router} from "@angular/router";
import {WfAuthService} from "../../auth/services/auth.service";

@Component({
  moduleId: module.id,
  selector: 'wf-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss']
})
export class WfLogoutButtonComponent {
  @Input() sideNav: any;
  spinnerIndex: number = SPINNER.LOGOUT;

  constructor(private router: Router,
              private wfAuthService: WfAuthService) {
  }

  logout(event: Event): void {
    event.preventDefault();
    this.wfAuthService.logout()
      .then(result => {
        this.sideNav.close();
        this.router.navigate(['./login']);
        console.log("Logout");
      });
  }

}
