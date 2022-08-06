import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map,tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  user: any='';
  loggedIn!: boolean;
  constructor(private router: Router,
    private socialAuthService: SocialAuthService) {
}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      this.user=localStorage.getItem('user')
      this.user=JSON.parse(this.user)
      if (this.user) {return true } else   {
        this.router.navigate(['login'])
       return true}
    }
  }
  
