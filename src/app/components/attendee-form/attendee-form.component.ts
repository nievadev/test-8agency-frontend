import { Component, OnInit } from '@angular/core';
import { CountryDataStoreService, Location } from 'src/app/services/country-data-store.service';


@Component({
  selector: 'app-attendee-form',
  templateUrl: './attendee-form.component.html',
  styleUrls: ['./attendee-form.component.css']
})
export class AttendeeFormComponent implements OnInit {
  countries$ = this.countryDataStore.getCountries();
  location$ = this.countryDataStore.getLocation();
  location?: Location;

  constructor(private countryDataStore: CountryDataStoreService) { }

  ngOnInit(): void {
    this.location$.subscribe(res => {
      this.location = res;
    })
  }

  getSelectedString(currentCountry: string) {
    return currentCountry == this.location!.country ? 'selected' : '';
  }

}