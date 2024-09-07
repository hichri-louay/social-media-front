import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _apiUrl = environment.apiUrl;

  constructor(
    private _http: HttpClient
  ) { }

  getPosts(): Observable<any> {
    return this._http.get(`${this._apiUrl}/api/post`);
  }
}
