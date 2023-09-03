import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserModel } from '../shared/models/user.model';

@Injectable()
export class AuthService {
  readonly USER_TOKEN_KEY = 'user-token'
  private authorizedUser: Partial<UserModel> | null = null

  public setToken(token: string) {
    localStorage.setItem(this.USER_TOKEN_KEY, token)
  }
  public getToken(): string | null {
    return localStorage.getItem(this.USER_TOKEN_KEY);
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

  public logout() {
    localStorage.removeItem(this.USER_TOKEN_KEY)
  }
}