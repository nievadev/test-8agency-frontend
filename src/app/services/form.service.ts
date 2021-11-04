import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Attendee } from 'src/app/components/attendee-form/attendee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  postData(formData: Attendee): Observable<Object> {
    return this.http.post(environment.apiUrl + '/attendees/', JSON.stringify(formData), {
      'headers': {
        'content-type': 'application/json'
      }
    });
  }
}
