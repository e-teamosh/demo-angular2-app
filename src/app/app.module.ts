import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MaterialModule} from "@angular/material";
import {AppRootComponent} from "./app-root.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {AuthModule} from "./auth/auth.module";
import {CommonModule} from "./common/common.module";
import {CoreModule} from "./core/core.module";
import {HomeModule} from "./home/home.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppRootComponent,
    PageNotFoundComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    AuthModule,
    CommonModule,
    CoreModule,
    HomeModule,
    AppRoutingModule
  ],
  exports: [
    AppRootComponent,
    PageNotFoundComponent,
    ToolbarComponent
  ],
  entryComponents: [AppRootComponent],
  bootstrap: [AppRootComponent]
})
export class AppModule {
}
