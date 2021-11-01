import { Injectable } from '@angular/core';
import { Specialist } from './models';

@Injectable({
  providedIn: 'root'
})
export class SpecialistsService {
  specialists: null | Array<Specialist> = null

  constructor() { }

  getSpecialists() {
    if (this.specialists != null) {
      return this.specialists
    }

    let specialists: Array<Specialist> = [
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

    specialists.forEach(obj => {
      obj.imageAsset = obj.imageAsset == '' ? '/assets/images/blank.svg' : obj.imageAsset
    })

    this.specialists = specialists;

    return this.specialists;
  }
}
