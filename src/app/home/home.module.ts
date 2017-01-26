import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from '@angular/material';
import {RouterModule} from "@angular/router";

import {HomeComponent} from './home.component';
import {homeRoutes} from "./home.routes";

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
