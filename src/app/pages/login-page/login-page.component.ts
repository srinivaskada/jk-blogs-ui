import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    this.googleLoginLink = `${environment.apiV1BaseUrl}/auth/google`
    this.facebookLoginLink = `${environment.apiV1BaseUrl}/auth/facebook`
  }
}
