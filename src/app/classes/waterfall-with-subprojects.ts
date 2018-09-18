import { Methodology } from '../interfaces/methodology';

export class WaterfallWithSubprojects {
    public static DATA: Methodology = {
        id: 'waterfall-with-subprojects',
        name: 'Waterfall With Subprojects',
        characteristics: [
          'El proyecto progresa a través de una secuencia ordenada de pasos.',
          'Está dirigido por documentos.',
          'Se realiza una revisión al final de cada etapa para pasar a la siguiente.',
          'Se tiene una definición estable del producto y se trabaja con metodologías y técnicas conocidas.',
          'Cada subsistema se puede desarrollar en paralelo.'
        ],
        advantages: [
          'Permite detectar errores en las primeras etapas con un costo bajo.',
          'Ayuda a minimizar los gastos de planificación.',
          'No se demora la implementación de las áreas que son fáciles de diseñar solo porque se está esperando el diseño de un área ' +
          'difícil.',
          'El proceso es más ágil, por lo que es más rápido en cuanto a tiempo de desarrollo.'
        ],
        disadvantages: [
          'Se dificulta pues es necesario tener requerimientos claros desde el principio.',
          'Es difícil regresar para corregir errores.',
          'Supone una cantidad muy grande de documentación',
          'La planificación debe ser mucho más cuidadosa, de lo contrario podría tener consecuencias desastrosas en los subproyectos.'
        ],
        whoItWorks: 'Es una variación sobre el ciclo de vida en cascada del software, denominada cascada ' +
        'con subproyectos porque permite la ejecución de algunas de las tareas de la cascada en paralelo.',
        graph: 'assets/img/watsubproyects.jpg',
        recommendedProjects: 'Funciona bien para proyectos complejos que se entienden correctamente y que se quiere que su tiempo de ' +
          'desarrollo sea menor.',
        sources: null
      };
}
