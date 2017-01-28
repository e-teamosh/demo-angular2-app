import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {AppRootComponent} from "./app-root.component";
import {NotFoundComponent} from "./notfound/not-found.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {appRoutes} from "./app.routes";
import {AuthModule} from "./auth/auth.module";
import {CommonModule} from "./common/common.module";
import {CoreModule} from "./core/core.module";
import {HomeModule} from "./home/home.module";

@NgModule({
  declarations: [
    AppRootComponent,
    NotFoundComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes, {
      useHash: true
    }),
    AuthModule,
    CommonModule,
    CoreModule,
    HomeModule
  ],
  exports: [
    AppRootComponent,
    NotFoundComponent,
    ToolbarComponent
  ],
  entryComponents: [AppRootComponent],
  bootstrap: [AppRootComponent]
})
export class AppModule {
}
