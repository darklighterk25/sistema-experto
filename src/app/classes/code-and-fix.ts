import { Methodology } from '../interfaces/methodology';

export class CodeAndFix {
    public static DATA: Methodology = {
        id: 'code-and-fix',
        name: 'Code & Fix',
        characteristics: [
          'Es poco util',
          'Es muy común',
          'Se utiliza cuando no se tiene claro el modelo del ciclo de vida.',
          'Solo se dedica tiempo a la codificación pura'
        ],
        advantages: [
          'No requiere gestion.',
          'Se puede tener o no una especificación formal.',
          'No se pierde tiempo en la planificación, documentación, control de calidad, cumplimiento de estandares, etc.',
          'Se dan rapidamente indicios de progreso'
        ],
        disadvantages: [
          'No ofrece medios de evaluación del progreso.',
          'No sirve para proyectos grandes',
          'Si se usa con frecuencia puede ocasionar desviaciones, dando como resultado una esetructura de dódigo y mantenibilidad inevitablemente deteriorados.'
        ],
        whoItWorks: 'Esta es una metodología ad hoc y no bien definida. Es un modelo simple de dos fases. ' +
        'La primera fase es escribir el código. La siguiente fase es reparar dicho código. Reparar el código en este contexto ' +
        'puede ser correción de errores o agregar funcionalidad adicional. Al usar este modelo, el código pronto se vuelve ' +
        'irreparable y no modificable. No hay espacio en este modelo para que el análisis, el diseño o el aspecto del proceso ' +
        'de desarrollo se lleven a cabo de forma estructurada o aislada.',
        graph: 'assets/img/am.png',
        recommendedProjects: 'Proyectos muy pequeños que tengan un ciclo de vida corto.',
        sources: [
          'http://agilemodeling.com/shared/AMPamphletSpanish.pdf',
          'http://www.itmplatform.com/es/blog/ventajas-e-inconvenientes-de-metodologias-agil-y-predictiva/'
        ]
      };
}
