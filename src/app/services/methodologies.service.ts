import { Injectable } from '@angular/core';
import { Methodology } from '../interfaces/methodology';

import { AdaptiveSoftwareDevelopment } from '../classes/adaptive-software-development';
import { AgileModeling } from '../classes/agile-modeling';
import { CrystalClearMethods } from '../classes/crystal-clear-methods';
import { DynamicSystemsDevelopmentMethod } from '../classes/dynamic-systems-development-method';
import { ExtremeProgramming } from '../classes/extreme-programming';
import { FeatureDrivenDevelopment } from '../classes/feature-driven-development';
import { Kanban } from '../classes/kanban';
import { Scrum } from '../classes/scrum';
import { ScrumBan } from '../classes/scrumban';
import { Devops } from '../classes/Devops';
import { LeanSoftDev } from '../classes/lean-software-development';
import { AUP } from '../classes/agile-unified-process';
import { DAD } from '../classes/Disciplined-agile-delivery';
import { Openup } from '../classes/openup';
import { DisenoPorPlanificacion } from '../classes/diseño-por-planificacion';
import { ModeloVDelMinisterioAlemanDeLaDefensa } from '../classes/modelo-V-del-ministerio-aleman-de-la-defensa';
import { ModeloIterativo } from '../classes/modelo-iterativo';
import { Prototipado } from '../classes/prototipado';
import { PrototipadoEvolutivo } from '../classes/prototipado-evolutivo';
import { Espiral } from '../classes/espiral';
import { EntregaEvolutiva } from '../classes/entrega-evolutiva';
import { ModeloDeCascadaConPrototipado } from '../classes/modelo-de-cascada-con-prototipado';
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
      Kanban.DATA,
      Scrum.DATA,
      ScrumBan.DATA,
      Devops.DATA,
      LeanSoftDev.DATA,
      AUP.DATA,
      DAD.DATA,
      Openup.DATA,
      DisenoPorPlanificacion.DATA,
      ModeloVDelMinisterioAlemanDeLaDefensa.DATA,
      ModeloIterativo.DATA,
      Prototipado.DATA,
      PrototipadoEvolutivo.DATA,
      Espiral.DATA,
      EntregaEvolutiva.DATA,
      ModeloDeCascadaConPrototipado.DATA
    ];
  }
  getLinks(): any {
    const LINKS: any[] = [];
    this.methodologies.forEach( ( value ) => {
      LINKS.push( { name: value.name, id: value.id } );
    });
    return LINKS;
  }
  getMethodologies(): Methodology[] {
    return this.methodologies;
  }
  getMethodology( id: string ): Methodology {
    for (let i = 0; i < this.methodologies.length; i++) {
      if (this.methodologies[i].id === id) {
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
