import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from '@angular/material';
import {RouterModule} from "@angular/router";

import {AppRootComponent} from './root/app-root.component';
import {appRoutes} from "./app.routes";
import {AuthModule} from "./auth/auth.module";
import {HomeModule} from "./home/home.module";
import {CommonModule} from "./commons/common.module"

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
    HomeModule,
    CommonModule
  ],
  exports: [AppRootComponent],
  entryComponents: [AppRootComponent],
  bootstrap: [AppRootComponent]
})
export class AppModule {
}
