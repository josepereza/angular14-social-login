import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser | undefined;
  constructor(private socialAuthService: SocialAuthService, private router:Router ) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      console.log('MI USUAARIO',user)
      localStorage.setItem("user", JSON.stringify(this.user));
  })
}
signInWithFB(): void {
  this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
}
}
