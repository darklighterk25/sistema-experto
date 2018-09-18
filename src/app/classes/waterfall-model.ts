import { Methodology } from '../interfaces/methodology';

export class WaterfallModel {
    public static DATA: Methodology = {
        id: 'waterfall-model',
        name: 'Waterfall Model',
        characteristics: [
          'El proyecto progresa a través de una secuencia ordenada de pasos.',
          'Está dirigido por documentos.',
          'Se realiza una revisión al final de cada etapa para pasar a la siguiente.',
          'Se tiene una definición estable del producto y se trabaja con metodologías y técnicas conocidas.'
        ],
        advantages: [
          'Permite detectar errores en las primeras etapas con un costo bajo.',
          'Ayuda a minimizar los gastos de planificación.',
          'Evita errores al eliminar cambios a medio camino.',
          'Funciona cuando se tiene poco personal calificado o el personal es inexperto.'
        ],
        disadvantages: [
          'Se dificulta pues es necesario tener requerimientos claros desde el principio.',
          'Es difícil regresar para corregir errores.',
          'Supone una cantidad muy grande de documentación',
          'Genera pocos signos visibles de progreso hasta el final.',
          'Se presentan resultados tangibles en forma de software hasta el final.'
        ],
        whoItWorks: 'Es el modelo clásico de la ingeniería de software. Este modelo es uno de los más ' +
        'viejos modelos y es extensamente usado en proyectos de gobierno y en muchas compañias ' +
        'mayores. Este modelo enfatiza la planeación en las etapas tempranas y detecta defectos en el ' +
        'diseño antes de que se desarrollen.',
        graph: 'assets/img/waterfall.gif',
        recommendedProjects: 'Funciona bien para proyectos complejos que se entienden correctamente.',
        sources: [
          ''
        ]
      };
}
