import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {WfSpinnerService, SPINNER} from "../../services/spinner.service";

@Component({
  moduleId: module.id,
  selector: 'wf-async-button',
  templateUrl: './async-button.component.html',
  styleUrls: ['./async-button.component.scss']
})
export class WfAsyncButtonComponent implements OnInit {
  @Input() isDisabled?: boolean = false;
  @Input() color?: string = 'primary';
  @Input() title: string = 'No title';
  @Input() type?: string = 'button';
  @Input() spinnerIndex?: number = SPINNER.GLOBAL;

  @Output() buttonClick = new EventEmitter();

  isBusy: boolean;

  constructor(private wfSpinnerService: WfSpinnerService) {
    this.isBusy = false;
  }

  ngOnInit() {
    this.wfSpinnerService.spinner[this.spinnerIndex].subscribe(result => {
      this.isBusy = result;
      this.isDisabled = result;
    });
  }

  onClick(event: Event): void {
    this.buttonClick.emit(event);
  }

}
