import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { SigninDto } from '../models/auth.dto';
import { SigninResponse } from '../models/auth.response';

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

  public signin(userData:SigninDto): Observable<SigninResponse> {
    return this._http.post<SigninResponse>(`${this._apiUrl}/api/auth/signin`, userData);
  }

  public saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  public removeToken(): void {
    localStorage.removeItem('authToken');
  }
}
