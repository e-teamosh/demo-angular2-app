import {NgModule} from "@angular/core";
import {Routes, RouterModule, Router} from "@angular/router";
import {WfPageNotFoundComponent} from "./page-not-found/page-not-found.component";

const wfAppRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: WfPageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(wfAppRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class WfAppRoutingModule {
  // Diagnostic only: inspect router configuration
  // constructor(router: Router) {
  //   console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  // }
}
