import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import * as _ from "lodash";
import {WfSpinnerService, SPINNER} from "../../services/spinner.service";

@Component({
  moduleId: module.id,
  selector: 'wf-async-button',
  templateUrl: './async-button.component.html',
  styleUrls: ['./async-button.component.scss']
})
export class WfAsyncButtonComponent implements OnInit {
  @Input() isDisabled: boolean;
  @Input() color: string;
  @Input() title: string;
  @Input() type: string;

  @Output() buttonClick = new EventEmitter();

  isBusy: boolean;

  constructor(private wfSpinnerService: WfSpinnerService) {
    this.isBusy = false;
  }

  ngOnInit() {
    _.forEach(SPINNER, (item) => {
      this.wfSpinnerService.spinner[item].subscribe(result => {
        this.isBusy = result;
        this.isDisabled = result;
      });
    });
  }

  onClick(event: Event): void {
    this.buttonClick.emit(event);
  }

}
