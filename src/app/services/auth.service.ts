import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserModel } from '../shared/models/user.model';

@Injectable()
export class AuthService {
  private authorizedUser: Partial<UserModel> | null = null
  constructor(private httpClient: HttpClient) {}

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

  public isAuthorizedUser(): boolean {
    const token = this.getToken();
    if(token) {
      const tokenResult: any = decode(token)
      this.authorizedUser = {
        ...tokenResult,
        iat: undefined,
        exp: undefined
      }
      return tokenResult.exp > moment().unix()
    }
    return false;
  }

  public getAuthorizedUser() {
    return this.authorizedUser
  }

  public isFeatureAuthenticated(feature: string) {
    // For authenticating specific features
    // TO implement feature specific authorization
    console.log('feature', feature)
    return this.isAuthorizedUser()
  }
}