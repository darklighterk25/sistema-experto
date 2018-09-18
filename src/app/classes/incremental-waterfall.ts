import { Methodology } from '../interfaces/methodology';

export class IncrementalWaterfall {
    public static DATA: Methodology = {
        id: 'incremental-waterfall',
        name: 'Incremental Waterfall',
        characteristics: [
          'Cada una de las etapas no se traslapan.',
          'Las etapas son independientes entre sí.',
          'Este modelo se basa en incrementos.'
        ],
        advantages: [
          'Se tiene muy bien estructurada cada iteración de incremento.',
          'Se realiza por partes funcionales.',
          'Se tiene una mayor abstracción y control de desarrollo del sistema.',
          'Se proveen entregas más rápidas que permiten la retroalimentación del cliente.'
        ],
        disadvantages: [ 'No es recomendable para sistemas que son largos y complejos.',
        'La organización y la arquitectura se ven afectados.',
        'Se vuelve difícil el hacer cambios a la mitad del proceso de desarrollo.'
        ],
        whoItWorks: 'Este modelo es como el modelo de cascada, con sus mismas etapas de ' +
        'desarrollo, pero se utiliza para ir dando incrementos en el desarrollo del ' +
        'sistema, no como en el modelo de cascada normal en el que el proceso solamente ' +
        'se hace una vez para todo el sistema, aquí se efectúan todas las etapas para cada ' +
        'incremento de la funcionalidad del sistema.',
        graph: 'assets/img/waterfall.gif',
        recommendedProjects: 'Proyectos medianos-grandes que no requieren mucha documentación.',
        sources: null
      };
}
