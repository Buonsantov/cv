import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../global-models/config';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: Config = {
    logs: true,
    test: false,
    project: '',
    isProd: false,
    versioneAccettazione: 0,
  };

  constructor(private httpClient: HttpClient) { console.log('configservice constructor'); }

  public init(): Promise<any> {
    // if (this.loaded === false) {
    // console.log('ConfigService Carico da file ' + environment.configFile);

    const promise = this.httpClient.get<Config>(environment.configFile).toPromise().then(
      (data: Config) => {
        this.config = data;
      },
    );

    return promise;
    // }
  }

  public getConfig(): Config {
    return this.config;
  }
}
