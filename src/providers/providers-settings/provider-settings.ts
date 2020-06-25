import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const CONFIG = {
apiUrl: "/crud/"

};

@Injectable()
export class ProviderSettingsProvider {

  constructor(public http: HttpClient) { }

  public getMainUrl() {
    return CONFIG.apiUrl;
  }
}