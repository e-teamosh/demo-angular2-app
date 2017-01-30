import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MaterialModule} from "@angular/material";
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    HomeRoutingModule
  ],
  providers: [],
  exports: [HomeComponent],
  entryComponents: [HomeComponent]
})
export class HomeModule {
}
