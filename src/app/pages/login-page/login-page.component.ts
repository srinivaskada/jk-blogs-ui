import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  host: {
    class: 'is-flex is-justify-content-center'
  }
})
export class LoginPage implements OnInit {
  public googleLoginLink: string = ''
  public facebookLoginLink: string = ''

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.googleLoginLink = `${environment.apiV1BaseUrl}/auth/google`
    this.facebookLoginLink = `${environment.apiV1BaseUrl}/auth/facebook`
    if(this.authService.isAuthorizedUser()) {
      this.router.navigate(['blogs'])
    }
  }
}
