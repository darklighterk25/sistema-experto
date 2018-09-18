import { Methodology } from '../interfaces/methodology';

export class AUP {
  public static DATA: Methodology = {
    id: 'agile-unified-process',
    name: 'Agile Unified Process',
    isAgile: true,
    characteristics: [
      'El personal sabe lo que está haciendo. La gente no va a leer detallado el proceso de documentación, pero algunos quieren una ' +
      'orientación de alto nivel y / o formación de vez en cuando. La AUP producto proporciona enlaces a muchos de los detalles, si ' +
      'usted está interesado, pero no obliga a aquellos que no lo deseen.',
      'Simplicidad. Todo se describe concisamente utilizando un puñado de páginas, no miles de ellos.',
      'Agilidad.El ajuste a los valores y principios de la Alianza Ágil',
      'Centrarse en actividades de alto valor. La atención se centra en las actividades que se ve que son esenciales para el de ' +
      'desarrollo, no todas las actividades que suceden forman parte del proyecto.',
      'Independencia de herramientas. Usted puede usar cualquier conjunto de herramientas que usted desea con el ágil UP. Lo ' +
      'aconsejable es utilizar las herramientas que son las más adecuadas para el trabajo, que a menudo son las herramientas ' +
      'simples o incluso herramientas de código abierto.',
      'Adaptación de este producto para satisfacer sus propias necesidades. EL producto es de fácil acomodo común a través de ' +
      'cualquier herramienta de edición de HTML. No se necesita comprar una herramienta especial, o tomar un curso, para adaptar la AUP.'
    ],
    advantages: [
      'No obliga al conocimiento a detalle',
      'Simplicidad apuntes concretos y breves',
      'Es un proceso simplificado de RUP',
      'Se centra en actividades de alto valor, estrictamente necesarias para el desarrollo'
    ],
    disadvantages: [
      'El AUP es un producto muy pesado en relación al RUP.',
      'Como es un proceso simplificado, muchos desarrolladores eligen trabajar con    el RUP, por tener a disposición mas detalles en ' +
      'el proceso.'
    ],
    whoItWorks: 'El Proceso Unificado Ágil de Scott Ambler o Agile Unified Process (AUP) en inglés es una versión simplificada del ' +
      'Proceso Unificado de Rational (RUP). Este describe de una manera simple y fácil de entender la forma de desarrollar aplicaciones ' +
      'de software de negocio usando técnicas ágiles y conceptos que aún se mantienen válidos en RUP. El AUP aplica técnicas ágiles ' +
      'incluyendo Desarrollo Dirigido por Pruebas (test driven development - TDD), Modelado Ágil, Gestión de Cambios Ágil, y ' +
      'Refactorización de Base de Datos para mejorar la productividad.',
    graph: 'assets/img/aup.jpg',
    recommendedProjects: null,
    sources: [
      'http://www.ambysoft.com/unifiedprocess/agileUP.html'
    ]
  };
}
