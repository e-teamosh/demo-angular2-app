import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {AuthService} from "./services/auth.service";
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  providers: [
    AuthService
  ],
  exports: [
    LoginComponent,
    SignupComponent
  ],
  entryComponents: [LoginComponent]
})
export class AuthModule {
}
