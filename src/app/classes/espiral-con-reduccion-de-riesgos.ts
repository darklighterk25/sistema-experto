import { Methodology } from '../interfaces/methodology';

export class EspiralConReduccionDeRiesgos {
  public static DATA: Methodology = {
    id: 'espiral-con-reduccion-de-riesgos',
    name: 'Espiral con Reduccion de Riesgos',
    characteristics: [
      'Enfatiza la participacion del ciente en el desarrollo del sistema',
      'Puede combinarse con otros modelos de desarrollo',
      'Cada vuelta constituye un nuevo modelo del sistema completo',
      'incorpora objetivos para determinar la calidad.'
    ],
    advantages: [
      'Puede adaptarse a lo largo de la vida del software computadoras',
      'Se permite que todas las partes involucradas en el sistema ganen',
      'El proyecto evoluciona a cada vez que se avanza en las iteraciones'
    ],
    disadvantages: [
      'Es complicado convencer a los clientes de que el enfoque evolutivo es controlable',
      'Es un modelo muy complejo por lo que no es recomendable aplicarlo a sistemas pequeños',
      'Se genera mucho tiempo de desarrollo en el sistema'
    ],
    whoItWorks: 'El principio del que se basa este modelo es del modelo Win-Win (ganar-ganar),el cual se efectúa a través de ' +
      'negociaciones, en el cual el cliente recibe el producto que satisface sus requerimientos y a su vez el conjunto de ' +
      'desarrolladores pueden alcanzar presupuestos y fechas de entrega, para lograr esto se hacen varias negociaciones al inicio de ' +
      'cada iteración en el espiral, como ya se mencionó previamente.',
    graph: 'assets/img/espiralconreduccionderiesgos.jpg',
    recommendedProjects: 'recomendable aplicarlo a sistemas que son pequeños, se genera mucho tiempo de desarrollo en el sistema, ' +
      'entre otras.',
    sources: null
  };
}
