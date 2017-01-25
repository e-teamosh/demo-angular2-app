import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";

import {LoginComponent} from "./components/login";
import {SignupComponent} from "./components/signup";
import {authRoutes} from "./auth.routes";

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(authRoutes, {
      useHash: true
    })
  ]
})
export class AuthModule {
}
