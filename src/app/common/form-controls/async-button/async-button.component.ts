import {Component, OnInit, Input} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'wf-async-button',
  templateUrl: './async-button.component.html',
  styleUrls: ['./async-button.component.scss']
})
export class WfAsyncButtonComponent implements OnInit {
  @Input() type: string;
  @Input() isDisabled: boolean;
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
