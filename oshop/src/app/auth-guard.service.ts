import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { take, map } from 'rxjs';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(route: any, state: RouterStateSnapshot): boolean {
    return this.auth.user$.subscribe((user: any) => {
      if (user) return true;
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    });
  }
}
