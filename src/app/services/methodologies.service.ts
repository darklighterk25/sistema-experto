import { Injectable } from '@angular/core';
import { Methodology } from '../interfaces/methodology';

// Metodologías
import { AdaptiveSoftwareDevelopment } from '../classes/adaptive-software-development';
import { AgileModeling } from '../classes/agile-modeling';
import { CrystalClearMethods } from '../classes/crystal-clear-methods';
import { DynamicSystemsDevelopmentMethod } from '../classes/dynamic-systems-development-method';
import { ExtremeProgramming } from '../classes/extreme-programming';
import { FeatureDrivenDevelopment } from '../classes/feature-driven-development';
import { Kanban } from '../classes/kanban';

@Injectable({
  providedIn: 'root'
})
export class MethodologiesService {

  private methodologies: Methodology[];

  constructor() {
    this.methodologies = [
      AdaptiveSoftwareDevelopment.DATA,
      AgileModeling.DATA,
      CrystalClearMethods.DATA,
      DynamicSystemsDevelopmentMethod.DATA,
      ExtremeProgramming.DATA,
      FeatureDrivenDevelopment.DATA,
      Kanban.DATA
    ];
  }
  getMethodologies(): Methodology[] {
    return this.methodologies;
  }
  getMethodology( id: string ): Methodology {
    for (let i = 0; i < this.methodologies.length; i++) {
      console.log('le llegó ' + id);
      if (this.methodologies[i].id === id) {
        console.log('y lo encontró!');
        return this.methodologies[i];
      }
    }
    return {
      id: 'prueba',
      name: 'Metodología',
      characteristics: [
        'Primer característica',
        'Segunda característica',
        'Tercer característica'
      ],
      advantages: [
        'Primer ventaja',
        'Segunda ventaja',
        'Tercer ventaja'
      ],
      disadvantages: null,
      whoItWorks: 'Así funciona',
      graph: 'http://placehold.it/250x250',
      recommendedProjects: 'Proyectos...',
      sources: [
        'wikipedia.org'
      ]
    };
  }
}
