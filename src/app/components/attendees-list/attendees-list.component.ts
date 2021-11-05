import { Component, OnInit } from '@angular/core';
import { AttendeesService } from 'src/app/services/attendees.service';

@Component({
  selector: 'app-attendees-list',
  templateUrl: './attendees-list.component.html',
  styleUrls: ['./attendees-list.component.css']
})
export class AttendeesListComponent implements OnInit {
  attendees$ = this.attendees.getAttendees();

  constructor(private attendees: AttendeesService) { }

  ngOnInit(): void {
  }

}
