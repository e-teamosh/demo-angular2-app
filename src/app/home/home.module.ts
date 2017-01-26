import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {homeRoutes} from "./home.routes";
import {HomeComponent} from "./home.component";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(homeRoutes, {
      useHash: true
    })
  ],
  providers: [],
  exports: [HomeComponent],
  entryComponents: [HomeComponent]
})
export class HomeModule {
}
