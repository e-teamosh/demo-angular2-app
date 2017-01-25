import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";

import {LoginComponent} from "./components/login";
import {SignupComponent} from "./components/signup";
import {authRoutes} from "./auth.routes";
import {UsersService} from "../commons/services";

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
  ],
  providers: [UsersService]
})
export class AuthModule {
}
