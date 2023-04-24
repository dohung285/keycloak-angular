import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // let  API:string= 'http://localhost:9000/api/authConfig';
  public API_GET_TOKEN: string =
    'http://localhost:9000/api/getToken';

  constructor(private http: HttpClient) {}

  public getAuthConfig(): Observable<any> {
    return this.http.get<any>('http://localhost:9000/api/authConfig');
  }

  public getToken(code: string): Observable<any> {
    // const body = {
    //   grant_type: 'authorization_code',
    //   client_id: 'demo',
    //   client_secret: 'f1c36e6b-a22c-4102-91cf-e1e492aea67b',  fQxqRJzLgrhJlIY5Pfxrj9NhDbw3pYHk
    //   code: code,
    //   redirect_uri: 'http://localhost:4200/home',
    // };
   
    return this.http.post(this.API_GET_TOKEN, code);
  }
}
