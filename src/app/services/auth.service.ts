import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  constructor(private cookieService: CookieService, private httpClient: HttpClient) {}

  public captureToken() {
    return this.httpClient.get<{
      data: {
        token: string
      }
    }>(`${environment.apiV1BaseUrl}/auth/capture-token`)
  }

  public setToken(token: string) {
    localStorage.setItem('user-token', token)
  }
  public getToken(): string | null {
    return localStorage.getItem('user-token');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    if(token) {
      const tokenResult: any = decode(token)
      return tokenResult.exp < moment().unix()
    }
    return false;
  }

  public isFeatureAuthenticated(feature: string) {
    // For authenticating specific features
    // TO implement feature specific authorization
    console.log('feature', feature)
    return this.isAuthenticated()
  }
}