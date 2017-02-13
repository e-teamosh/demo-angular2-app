import {Component} from "@angular/core";
import {WfSpinnerService, SPINNER} from "../services/spinner.service";

@Component({
  moduleId: module.id,
  selector: 'wf-global-spinner',
  templateUrl: './global-spinner.component.html',
  styleUrls: ['./global-spinner.component.scss']
})
export class WfGlobalSpinnerComponent {
  spinnerIndex = SPINNER.GLOBAL;
  isBusy: boolean;

  constructor(private wfSpinnerService: WfSpinnerService) {
    this.wfSpinnerService.spinner[this.spinnerIndex].subscribe(result => this.isBusy = result);
  }
}
