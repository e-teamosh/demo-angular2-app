import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from '@angular/material';
import {RouterModule} from "@angular/router";

import {AppRootComponent} from './components/root';
import {appRoutes} from "./app.routes";
import {AuthModule} from "./Auth";
import {HomeModule} from "./Home";

@NgModule({
  declarations: [
    AppRootComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes, {
      useHash: true
    }),
    AuthModule,
    HomeModule
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule {
}
