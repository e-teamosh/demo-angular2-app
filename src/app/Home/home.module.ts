import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from '@angular/material';
import {RouterModule} from "@angular/router";

import {HomeComponent} from './components/home';
import {PlanetsService} from '../common/planets.service';
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
  providers: [PlanetsService]
})
export class HomeModule {
}
