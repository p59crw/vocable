import { Injectable } from '@angular/core';
import { AppConfig } from './../app.config';

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
    if (this.getCurrentEnv() === 'development') {
      host = this.config.getConfig('server');
    } else if (this.getCurrentEnv() === 'production') {
      host = this.config.getConfig('secure_server');
    }
    return host;
  }

  getCurrentEnv(): string {
    const env: string = this.config.getEnv('env');
    return env;
  }

}
