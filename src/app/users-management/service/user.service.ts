import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../models/users.model';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class UserService {
  private userUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }
}
