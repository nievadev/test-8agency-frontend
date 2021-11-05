import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attendee } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class AttendeesService {

  constructor(private http: HttpClient) { }

  // NIEVATODO: Note that I'm aware that there is no pagination
  getAttendees(): Observable<Array<Attendee>> {
    return this.http.get<Array<Attendee>>(environment.apiUrl + '/attendees/');
  }
}
