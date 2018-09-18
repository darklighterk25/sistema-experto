import { Injectable } from '@angular/core';
import { Characteristic } from '../interfaces/characteristic';

@Injectable({
  providedIn: 'root'
})
export class CharacteristicsService {

  private characteristics: Characteristic[];


  constructor() {
    this.characteristics = [
      {
        description: 'Ciclo de vida del software corto',
        checked: false,
        methodologies: [0],
        points: [4]
      },
      {
        description: 'Sin requerimientos/descripcion incial definidos',
        checked: false,
        methodologies: [0, 10, 11, 12, 13],
        points: [3, 4, 4, 4, 4]
      },
      {
        description: 'Proyectos pequeños',
        checked: false,
        methodologies: [0, 37],
        points: [2, 1]
      },
      {
        description: 'Proyectos grandes',
        checked: false,
        methodologies: [15, 16, 23, 27, 29, 35],
        points: [3, 3, 2, 1, 4, 1]
      },
      {
        description: 'Poca documentación',
        checked: false,
        methodologies: [0, 24, 29, 30, 37],
        points: [1, 1, 1, 1, 3]
      },
      {
        description: 'Documentación mediana',
        checked: false,
        methodologies: [3, 6],
        points: [1, 1]
      },
      {
        description: 'Documentación detallada',
        checked: false,
        methodologies: [2, 4, 9, 13, 15, 16, 19, 23, 21],
        points: [4, 1, 3, 3, 2, 2, 1, 4, 2]
      },
      {
        description: 'Modulación del proyecto',
        checked: false,
        methodologies: [1, 4, 7, 8, 14, 15, 16, 18, 20, 22, 21, 28, 30, 32],
        points: [4, 4, 3, 2, 1, 1, 1, 1, 3, 4, 4, 2, 2, 1]
      },
      {
        description: 'Con requerimientos/descripcion inicial definidos',
        checked: false,
        methodologies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 22],
        points: [3, 3, 3, 3, 3, 3, 2, 1, 1, 1]
      },
      {
        description: 'Proyectos complejos',
        checked: false,
        methodologies: [1, 2, 3, 4, 6, 9, 15, 16, 20, 22, 21, 25, 29],
        points: [2, 2, 2, 2, 2, 4, 4, 4, 1, 2, 3, 1, 3]
      },
      {
        description: 'Equipos de trabajo pequeños',
        checked: false,
        methodologies: [1, 5, 9, 17],
        points: [1, 2, 2, 1]
      },
      {
        description: 'Personal no especializado',
        checked: false,
        methodologies: [2, 13],
        points: [1, 1]
      },
      {
        description: 'Personal especializado',
        checked: false,
        methodologies: [19, 21, 27, 31, 34, 35, 36],
        points: [2, 1, 2, 1, 4, 4, 1]
      },
      {
        description: 'Retroalimentación entre equipos de trabajo',
        checked: false,
        methodologies: [3, 23, 25, 26, 27, 29, 30, 31, 32, 33, 34, 36, 37],
        points: [4, 3, 2, 2, 3, 2, 3, 4, 3, 2, 2, 2, 2]
      },
      {
        description: 'Entregas constantes',
        checked: false,
        methodologies: [5, 6, 7, 8, 10, 11, 12, 14, 23, 27, 34, 36],
        points: [4, 4, 4, 3, 3, 3, 3, 3, 1, 4, 1, 4]
      },
      {
        description: 'Flexibilidad ante el cambio',
        checked: false,
        methodologies: [5, 7, 10, 11, 12, 13, 14, 17, 24, 25, 26, 31, 33],
        points: [1, 1, 2, 2, 2, 2, 4, 2, 4, 4, 3, 3, 1]
      },
      {
        description: 'Presupuesto corto',
        checked: false,
        methodologies: [28],
        points: [3]
      },
      {
        description: 'Fecha limite de entrega',
        checked: false,
        methodologies: [8, 18, 26],
        points: [4, 2, 4]
      },
      {
        description: 'Comunicación con el cliente',
        checked: false,
        methodologies: [10, 11, 12, 14, 17, 24, 26, 28, 31, 32, 33, 34, 36, 37],
        points: [1, 1, 1, 2, 3, 2, 1, 1, 2, 2, 3, 3, 3, 4]
      },
      {
        description: 'Promover reutilización de código',
        checked: false,
        methodologies: [18, 19, 20, 22],
        points: [4, 3, 4, 3]
      },
      {
        description: 'Desarrollo rapido',
        checked: false,
        methodologies: [17, 18, 19, 20, 24, 25, 28, 33, 35],
        points: [4, 3, 4, 2, 3, 3, 4, 4, 3]
      },
      {
        description: 'Herramientas gráficas',
        checked: false,
        methodologies: [30, 32, 35],
        points: [4, 4, 2]
      }
    ];
  }

  getCharacteristics(): Characteristic[] {
    this.characteristics.forEach( ( characteristic ) => {
      characteristic.checked = false;
    });
    return this.characteristics;
  }
}
