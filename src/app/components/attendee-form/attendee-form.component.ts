import { Component, OnInit } from '@angular/core';
import { CountryDataStoreService, Location } from 'src/app/services/country-data-store.service';
import { FormService } from 'src/app/services/form.service';
import { FormBuilder, Validators } from '@angular/forms';
import { isDevMode } from '@angular/core';
import { workEmailPattern } from './work-email-pattern';

@Component({
  selector: 'app-attendee-form',
  templateUrl: './attendee-form.component.html',
  styleUrls: ['./attendee-form.component.css']
})
export class AttendeeFormComponent implements OnInit {
  countries$ = this.countryDataStore.getCountries();
  location$ = this.countryDataStore.getLocation();
  attendeeForm = this.fb.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    workEmail: ['', [Validators.required, Validators.pattern(workEmailPattern)]],
    country: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]],
    workPosition: ['', [Validators.required]]
  });
  controls = this.attendeeForm.controls;
  debounce = false;

  isDevMode = isDevMode;

  constructor(
    private countryDataStore: CountryDataStoreService,
    private form: FormService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.location$.subscribe(res => {
      this.attendeeForm.patchValue({
        country: res.country
      });
    })
  }

  onSubmit() {
    if (this.debounce) {
      return
    }

    this.debounce = true;

    this.form.postData(this.attendeeForm.value).subscribe(res => {
      alert('¡Ahora estás inscripto!');
      this.attendeeForm.reset();
    });

    setTimeout(() => {
      this.debounce = false;
    }, 1000);
  }
}