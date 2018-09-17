import { Injectable } from '@angular/core';
import { Characteristic } from '../interfaces/characteristic';

@Injectable({
  providedIn: 'root'
})
export class CharacteristicsService {

  private characteristics: Characteristic[];


  constructor() {
    this.characteristics = [{description: 'Caracteristica 1', checked: false},
    {description: 'Caracteristica 2', checked: false},
    {description: 'Caracteristica 3', checked: false},
    {description: 'Caracteristica 4', checked: false}];
   }

  getCharacteristics(): Characteristic[] {
    return this.characteristics;
  }
}
