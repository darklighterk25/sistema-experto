import { Injectable } from '@angular/core';

// Interfaces
import { Methodology } from '../interfaces/methodology';
import { Link } from '../interfaces/link';

// Metodologías
import { AdaptiveSoftwareDevelopment } from '../classes/adaptive-software-development';
import { AgileModeling } from '../classes/agile-modeling';
import { CrystalClearMethods } from '../classes/crystal-clear-methods';
import { DynamicSystemsDevelopmentMethod } from '../classes/dynamic-systems-development-method';
import { ExtremeProgramming } from '../classes/extreme-programming';
import { FeatureDrivenDevelopment } from '../classes/feature-driven-development';
import { Kanban } from '../classes/kanban';
import { Scrum } from '../classes/scrum';
import { ScrumBan } from '../classes/scrumban';
import { Devops } from '../classes/devops';
import { LeanSoftDev } from '../classes/lean-software-development';
import { AUP } from '../classes/agile-unified-process';
import { DAD } from '../classes/disciplined-agile-delivery';
import { Openup } from '../classes/openup';
import { DisenoPorPlanificacion } from '../classes/diseño-por-planificacion';
import { ModeloVDelMinisterioAlemanDeLaDefensa } from '../classes/modelo-v-del-ministerio-aleman-de-la-defensa';
import { ModeloIterativo } from '../classes/modelo-iterativo';
import { Prototipado } from '../classes/prototipado';
import { PrototipadoEvolutivo } from '../classes/prototipado-evolutivo';
import { Espiral } from '../classes/espiral';
import { EntregaEvolutiva } from '../classes/entrega-evolutiva';
import { ModeloDeCascadaConPrototipado } from '../classes/modelo-de-cascada-con-prototipado';
import { CodeAndFix } from '../classes/code-and-fix';
import { StructuredDevelopment } from '../classes/structured-development';
import { WaterfallModel } from '../classes/waterfall-model';
import { SashimiModel } from '../classes/sashimi-model';
import { WaterfallWithSubprojects } from '../classes/waterfall-with-subprojects';
import { IncrementalModel } from '../classes/incremental-model';
import { IncrementalWaterfall} from '../classes/incremental-waterfall';
import { StageDeliveryModel } from '../classes/stage-delivery-model';
import { Direct } from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})
export class MethodologiesService {

  private methodologies: Methodology[];

  constructor() {
    this.methodologies = [
      CodeAndFix.DATA,
      StructuredDevelopment.DATA,
      WaterfallModel.DATA,
      SashimiModel.DATA,
      WaterfallWithSubprojects.DATA,
      IncrementalModel.DATA,
      IncrementalWaterfall.DATA,
      StageDeliveryModel.DATA,
      DisenoPorPlanificacion.DATA,
      ModeloVDelMinisterioAlemanDeLaDefensa.DATA,
      ModeloIterativo.DATA,
      Prototipado.DATA,
      PrototipadoEvolutivo.DATA,
      ModeloDeCascadaConPrototipado.DATA,
      EntregaEvolutiva.DATA,
      Espiral.DATA, //Despues de esta madre van las clases de calvin :v
      ExtremeProgramming.DATA,
      AdaptiveSoftwareDevelopment.DATA,
      DynamicSystemsDevelopmentMethod.DATA,
      CrystalClearMethods.DATA,
      FeatureDrivenDevelopment.DATA,
      AgileModeling.DATA,
      Kanban.DATA,
      Scrum.DATA,
      ScrumBan.DATA,
      LeanSoftDev.DATA,
      Devops.DATA,
      AUP.DATA,
      DAD.DATA,
      Openup.DATA
    ];
  }
  getLinks(): any {
    const TRADITIONALS: Link[] = [];
    const AGILE: Link[] = [];
    this.methodologies.forEach( ( methodology ) => {
      if (methodology.isAgile) {
        AGILE.push( { name: methodology.name, id: methodology.id } );
      } else {
        TRADITIONALS.push( { name: methodology.name, id: methodology.id } );
      }
    });
    return { traditionals: TRADITIONALS, agile: AGILE };
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
  getScores() {
    const METHODOLOGIES: any[] = [];
    const SCORE = 0;
    this.methodologies.forEach( function ( value ) {
      METHODOLOGIES.push( { name: value.name, score: SCORE, summary: '' + value.whoItWorks.substr(0, 150) + '...' } );
    });
    return METHODOLOGIES;
  }
}
