import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {authRoutes} from "./auth.routes";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(authRoutes, {
      useHash: true
    })
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
