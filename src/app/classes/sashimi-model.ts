import { Methodology } from '../interfaces/methodology';

export class SashimiModel {
    public static DATA: Methodology = {
        id: 'sashimi-model',
        name: 'Sashimi Model',
        characteristics: [
          'El proyecto progresa a través de una secuencia ordenada de pasos.',
          'Está dirigido por documentos.',
          'Se realiza una revisión al final de cada etapa para pasar a la siguiente.',
          'Se tiene una definición estable del producto y se trabaja con metodologías y técnicas conocidas.'
        ],
        advantages: [
          'Permite detectar errores en las primeras etapas con un costo bajo.',
          'Ayuda a minimizar los gastos de planificación.',
          'Debido al solapamiento de las fases, se puede realizar una retroalimentación entre ellas.',
          'Funciona cuando se tiene poco personal calificado o el personal es inexperto.'
        ],
        disadvantages: [
          'Se dificulta pues es necesario tener requerimientos claros desde el principio.',
          'Supone una cantidad muy grande de documentación',
          'Genera pocos signos visibles de progreso hasta el final.',
          'Se presentan resultados tangibles en forma de software hasta el final.'
        ],
        whoItWorks: 'Este modelo fue originado por Peter DeGrace. En ocasiones se le hace referencia ' +
        'como "modelo en cascada con fases solapadas". Ya que las fases en el modelo sashimi se ' +
        'superponen, la información de puntos problemáticos puede ser atendida durante otras fases del modelo de cascada.',
        graph: 'assets/img/sashimi.png',
        recommendedProjects: 'Proyectos con equipos débiles y productos maduros.',
        sources: [
          ''
        ]
      };
}
