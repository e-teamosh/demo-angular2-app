import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {WfAuthService} from "../../auth/services/auth.service";

@Injectable()
export class WfAuthGuardService implements CanActivate {
  constructor(private wfAuthService: WfAuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return this.wfAuthService.isAuthorized();
  }
}
