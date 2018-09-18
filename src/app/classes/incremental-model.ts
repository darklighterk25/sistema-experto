import { Methodology } from '../interfaces/methodology';

export class IncrementalModel {
    public static DATA: Methodology = {
        id: 'incremental-model',
        name: 'Incremental Model',
        characteristics: [
          'En la primera versión solo se añaden características básicas de funcionalidad.',
          'Se liberan los requerimientos por partes.',
          'Cada requerimiento sigue los pasos del modelo de cascada',
          'El cliente no debe esperar a que el sistema esté concluido en su totalidad para interactuar con él.'
        ],
        advantages: [
          'El costo total del proyecto es distribuido.',
          'Un limitado número de personas puede ser puesto en el proyecto por que el trabajo se entregará en partes.',
          'Los clientes tienen oportunidad de ver la funcionalidad útil desde el principio del ciclo de vida del software.',
          'El riesgo de fallas de un producto disminuye a medida que los usuarios comienzan a usar el producto temprano.'
        ],
        disadvantages: [
          'Como el producto se entrega por partes, el costo total del desarrollo es mayor.',
          'Se requieren interfaces bien definidas para conectar los módulos desarrollados con cada fase.',
          'El modelo requiere un cronograma de planificación de proyectos bien definido para distribuir el trabajo apropiadamente',
          'Los módulos de prueba también resultan en costos indirectos y mayores'
        ],
        whoItWorks: 'El modelo incremental, se basa en el modelo de cascada tradicional, solo que este ' +
        'modelo libera el producto parcialmente al usuario en un principio y lentamente agrega ' +
        'funcionalidad incrementada al sistema liberando los requerimientos por partes. Al desarrollo ' +
        'de cada requerimiento se le aplican los pasos del modelo tradicional de cascada.',
        graph: 'assets/img/incmodel.png',
        recommendedProjects: 'Proyectos no tan grandes en donde se quiere que el cliente vea avances rápidos.',
        sources: [
          ''
        ]
      };
}
