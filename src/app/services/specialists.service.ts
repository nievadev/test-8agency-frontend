import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type Specialist = {
  role: string,
  name: string,
  imageAsset: string
}

// Mock object
const specialists: Array<Specialist> = [
  {
    role: 'Presidente',
    name: 'José Pérez',
    imageAsset: ''
  },
  {
    role: 'Customer Service Senior Manager',
    name: 'José Pérez',
    imageAsset: ''
  },
  {
    role: 'Senior Customer Success Consultant',
    name: 'José Pérez',
    imageAsset: ''
  },
  {
    role: 'Gerente de Consultoría de Soluciones',
    name: 'José Pérez',
    imageAsset: ''
  }
];

@Injectable({
  providedIn: 'root'
})
export class SpecialistsService {
  specialists$ = new Observable<Array<Specialist>>(observer => {
    observer.next(specialists);
  }).pipe(
    map((specialists: Array<Specialist>) => {
      specialists.forEach(specialist => {
        specialist.imageAsset = specialist.imageAsset == '' ? '/assets/images/blank.svg' : specialist.imageAsset
      })

      return specialists
    })
  );

  constructor() { }

  getSpecialists() {
    return this.specialists$;
  }
}
