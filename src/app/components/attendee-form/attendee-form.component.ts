import { Component, OnInit } from '@angular/core';
import { CountryDataStoreService, Location } from 'src/app/services/country-data-store.service';
import { Attendee } from './attendee';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-attendee-form',
  templateUrl: './attendee-form.component.html',
  styleUrls: ['./attendee-form.component.css']
})
export class AttendeeFormComponent implements OnInit {
  countries$ = this.countryDataStore.getCountries();
  location$ = this.countryDataStore.getLocation();
  location?: Location;
  model = new Attendee();

  constructor(private countryDataStore: CountryDataStoreService, private form: FormService) { }

  ngOnInit(): void {
    this.location$.subscribe(res => {
      this.location = res;

      this.model.country = this.location.country;
    })
  }

  onSubmit() {
    this.form.postData(this.model).subscribe();
  }
}