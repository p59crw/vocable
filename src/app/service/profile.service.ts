import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileUrl = 'http://localhost:3000/api/profile';

  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get<any>(this.profileUrl);
  }

}
