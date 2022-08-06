import { Component, OnInit } from '@angular/core';
import {SocialAuthService} from '@abacritt/angularx-social-login';
import {Router} from '@angular/router';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
user:any
  constructor(private router: Router,
    public socialAuthServive: SocialAuthService) { }

  ngOnInit(): void {
    this.user=localStorage.getItem('user')
    this.user=JSON.parse(this.user)
    
  }
  logout(): void {
    localStorage.removeItem('user')
    localStorage.clear
     this.router.navigate(['login']);
  }
}
