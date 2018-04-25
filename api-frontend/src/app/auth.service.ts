import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  user;
  authT;

  constructor(
    private http: Http
  ) { }

  registry(user) {
    return this.http.post('http://localhost:8080/user/register', user).map(res => res.json());
  }

  login(user) {
    return this.http.post('http://localhost:8080/user/login', user).map(res => res.json());
  }

  logout() {
    this.authT = null;
    this.user = null;
    localStorage.clear();
  }

  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authT = token;
    this.user = user;
  }
}
