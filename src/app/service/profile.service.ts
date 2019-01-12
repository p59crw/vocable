import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  getProfile() {
    return this.http.get<any>(this.config._profileUrl);
  }

}
