import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {
  Github,
  GithubUser,
  GithubUserDetails,
} from '../model/github-user.model';

@Injectable({
  providedIn: 'root',
})
export class GhUsersService {
  constructor(private http: HttpClient) {}

  searchUser(userName: string): Observable<GithubUserDetails> {
    return this.http.get<GithubUserDetails>(
      `https://api.github.com/users/${userName}`
    );
  }

  searchUsers(query: string): Observable<GithubUser[]> {
    return this.http
      .get<Github>(`https://api.github.com/search/users?q=${query}`)
      .pipe(map((res) => res.items));
  }
}
