import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8088/api/v1/auth';

  constructor(private http: HttpClient) { }

  register(user: User){
      return this.http.post(`${this.baseUrl}/register`, user);
  }
}
