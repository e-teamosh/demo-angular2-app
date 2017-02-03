import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MaterialModule} from "@angular/material";
import {WfHomeRoutingModule} from "./home-routing.module";
import {WfHomeComponent} from "./home.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    WfHomeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    WfHomeRoutingModule
  ],
  providers: [],
  exports: [WfHomeComponent],
  entryComponents: [WfHomeComponent]
})
export class WfHomeModule {
}
