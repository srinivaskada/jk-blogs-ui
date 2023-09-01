import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import * as moment from 'moment';

@Injectable()
export class AuthService {
  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    if(token) {
      const tokenResult: any = decode(token)
      return tokenResult.exp < moment().unix()
    }
    return false;
  }
}