import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _apiUrl = environment.apiUrl; 

  constructor(
    private _http: HttpClient
  ) { }

  public signup(userData:any): Observable<any> {
    console.log('test env : ', this._apiUrl);
    return this._http.post(`${this._apiUrl}/api/auth/signup`, userData);
  }

  public signin(userData:any): Observable<any> {
    return this._http.post(`${this._apiUrl}/api/auth/signin`, userData);
  }
}
