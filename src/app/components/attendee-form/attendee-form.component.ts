import { Component, OnInit } from '@angular/core';
import { CountryDataStoreService } from 'src/app/services/country-data-store.service';


@Component({
  selector: 'app-attendee-form',
  templateUrl: './attendee-form.component.html',
  styleUrls: ['./attendee-form.component.css']
})
export class AttendeeFormComponent implements OnInit {
  countries$ = this.countryDataStore.getCountries();

  constructor(private countryDataStore: CountryDataStoreService) { }

  ngOnInit(): void {
  }

}
