import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'attendee-invalid-message',
  templateUrl: './invalid-message.component.html',
  styleUrls: ['./invalid-message.component.css']
})
export class InvalidMessageComponent implements OnInit {
  @Input() condition = false;
  @Input() message = '';

  constructor() { }

  ngOnInit(): void {
  }

}
