import { Injectable } from '@angular/core';
import { Characteristic } from '../interfaces/characteristic';

@Injectable({
  providedIn: 'root'
})
export class CharacteristicsService {

  private characteristics: Characteristic[];


  constructor() {
    this.characteristics = [{description: 'Ciclo de vida del software corto', checked: false, methodologies: [0], points: [4] },
    {description: 'Sin requerimientos/descripcion incial definidos', checked: false, methodologies: [0], points: [3] },
    {description: 'Proyectos pequeños', checked: false, methodologies: [0], points: [2] },
    {description: 'Poca documentación', checked: false, methodologies: [0], points: [1] },
    {description: 'Modulación del proyecto', checked: false, methodologies: [1, 4], points: [4, 4] },
    {description: 'Con requerimientos/descripcion inicial definidos', checked: false, methodologies: [1, 2, 3, 4, 5], points: [3, 3, 3, 3, 3] },
    {description: 'Proyectos complejos', checked: false, methodologies: [1, 2, 3, 4], points: [2, 2, 2, 2] }];
   }

  getCharacteristics(): Characteristic[] {
    return this.characteristics;
  }
}
