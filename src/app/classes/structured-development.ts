import { Methodology } from '../interfaces/methodology';

export class StructuredDevelopment {
    public static DATA: Methodology = {
        id: 'structured-development',
        name: 'Structured Development',
        characteristics: [
          'Mayor nivel de abstracción.',
          'Elemento básico de diseño: módulo.',
          'Modularidad que permite medir la calidad de programas.',
          'Representa los procesos, flujos y estructuras de datos, de una manera jerárquica y descendente.'
        ],
        advantages: [
          'Un problema grande se puede divir en subproblemas.',
          'Cada subproblema será más fácil de resolver.',
          'Se puede dividir un problema tantas veces como sea necesario.',
          'La solución de cada subproblema será la solución al problema inicial.'
        ],
        disadvantages: [
          'Leer todas las especificaciones para entender el problema',
          'Se repite la misma información en partes diferentes del documento.',
          'Cuando se termina el proceso de desarrollo las especificaciones son obsoletas.'
        ],
        whoItWorks: 'Concibe el análisis y diseño del sistema en base a la construcción de modelos, ' +
        'con el fin de representar las funciones que realiza el sistema, desde su concepción física ' +
        'hasta la deducción lógica de su información y procesos.',
        graph: 'assets/img/am.png',
        recommendedProjects: 'Proyectos de tamaño medio que no requieran de una documentación bien estructurada.',
        sources: [
          'http://agilemodeling.com/shared/AMPamphletSpanish.pdf',
          'http://www.itmplatform.com/es/blog/ventajas-e-inconvenientes-de-metodologias-agil-y-predictiva/'
        ]
      };
}
