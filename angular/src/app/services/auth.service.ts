import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private URL = 'https://emanuelcacheda.herokuapp.com/api/'

  constructor(private http: HttpClient,
    private router: Router
  ) { }

  signIn(loginForm) {
    return this.http.post<any>(this.URL + '/admin/login/get', loginForm);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/admin/login']);
  }
}
