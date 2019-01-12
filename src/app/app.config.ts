import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';

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
      this.http.get('assets/config/env.json').pipe(map(env => env)).subscribe((envResponse: EnvData) => {
        this.env = envResponse.env;
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
          request.pipe(map(res => res)).subscribe((responseData) => {
            this.config = responseData;
            resolve(true);
          });
        } else {
          console.error('Env config file "env.json" is not valid.');
          reject();
        }
      });

    });
  }
}
