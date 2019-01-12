import { Injectable } from '@angular/core';
import { AppConfig } from './../app.config';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private hostName = this.getHost();
  public _registerUrl = this.hostName + 'register';
  public _loginUrl = this.hostName + 'login';
  public _profileUrl = this.hostName + 'profile';

  constructor(private config: AppConfig) { }

  getHost(): string {
    let host = '';
    if (!environment.production) {
      host = environment.LOCAL_API;
    } else {
      host = environment.SECURE_HOST_API;
    }
    return host;
  }

  getCurrentEnv(): string {
    const env: string = this.config.getEnv('env');
    return env;
  }

}
