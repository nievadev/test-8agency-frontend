import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

type Country = {name: string};

export type Location = {country: string};

@Injectable({
  providedIn: 'root'
})
export class CountryDataStoreService {
  constructor(private http: HttpClient) { }

  getCountries(): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(environment.apiUrl + 'countries/');
  }

  getLocation() {
    return this.http.get<Location>('http://ip-api.com/json/');
  }
}
