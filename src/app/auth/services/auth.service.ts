import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _apiUrl = 'http://localhost:5000'; 

  constructor(
    private _http: HttpClient
  ) { }

  public signup(userData:any): Observable<any> {
    return this._http.post(`${this._apiUrl}/api/auth/signup`, userData);
  }

  public signin(userData:any): Observable<any> {
    return this._http.post(`${this._apiUrl}/api/auth/signin`, userData);
  }
}
