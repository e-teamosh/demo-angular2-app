import {Component, Input} from "@angular/core";
import {SPINNER, WfSpinnerService} from "../../common/spinner-controls/services/spinner.service";
import {Router} from "@angular/router";
import {WfAuthService} from "../../auth/services/auth.service";
import {MdSidenav} from "@angular/material";

@Component({
  moduleId: module.id,
  selector: 'wf-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss']
})
export class WfLogoutButtonComponent {
  @Input() sideNav: MdSidenav;
  spinnerIndex: number = SPINNER.LOGOUT;

  constructor(private router: Router,
              private wfAuthService: WfAuthService,
              private wfSpinnerService: WfSpinnerService) {
  }

  logout(event: Event): void {
    event.preventDefault();
    this.wfSpinnerService.showSpinner(this.spinnerIndex);
    this.wfAuthService.logout()
      .then(result => {
        this.sideNav.close();
        this.router.navigate(['./login']);
        this.wfSpinnerService.hideSpinner(this.spinnerIndex);
        console.log("Logout");
      });
  }

}
