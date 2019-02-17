import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

class EnvData {
  env: string;
}

@Injectable()
export class AppConfig {

  private config: Object = null;
  private env: Object = null;

  constructor(private http: HttpClient) {

  }

  /**
   * Get data from config file.
   */
  public getConfig(key: any) {
    return this.config[key];
  }

  /**
   * Get data from env file.
   */
  public getEnv(key: any) {
    return this.env[key];
  }

  /**
   * Load env.json to get environment, then load
   * config[env].json to get env's variables.
   */
  public load() {
    return new Promise((resolve, reject) => {
      this.http.get('assets/config/env.json').map(res => res).catch((error: any): any => {
        console.log('Config file env.json could not be read');
        resolve(true);
        return Observable.throw(error.json().error || 'Server error');
      }).subscribe((envResponse: EnvData) => {
        this.env = envResponse;
        let request: any = null;

        switch (envResponse.env) {
          case 'production': {
            request = this.http.get('assets/config/config.production.json');
          } break;

          case 'development': {
            request = this.http.get('assets/config/config.development.json');
          } break;

          case 'default': {
            console.error('Environment file is not set or is invalid.');
            resolve(true);
          } break;
        }

        if (request) {
          request
            .map(res => res.json())
            .catch((error: any) => {
              console.log('Error reading ' + envResponse.env + ' config file.');
              resolve(error);
              return Observable.throw(error.json().error || 'Server error');
            })
            .subscribe((responseData) => {
              this.config = responseData;
              resolve(true);
            });
        } else {
          console.error('Env config file "env.json" is not valid.');
        }
      });

    });
  }
}
