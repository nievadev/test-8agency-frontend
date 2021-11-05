import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  postData(formData: Object): Observable<Object> {
    return this.http.post(environment.apiUrl + '/attendees/', formData);
  }
}
