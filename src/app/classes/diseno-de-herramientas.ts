import { Methodology } from '../interfaces/methodology';

export class DisenoDeHerramientas {
  public static DATA: Methodology = {
    id: 'diseno-por-herramientas',
    name: 'Diseno por Herramientas',
    characteristics: [
      'Este modelo se puede combinar con otros para sacar provecho de las ventajas de cada uno'
    ],
    advantages: [
      'ofrece una velocidad de desarrollo muy buena gracias a la incorporación de herramientas'
    ],
    disadvantages: [
      'Al hacer incorporación de herramientas al sistema, no se tiene un suficiente control sobre su funcionalidad',
      'en ocasiones no será posible cubrir todas las funcionalidades requeridas',
      'este modelo es para sistemas pequeños'
    ],
    whoItWorks: 'Los principios en los que se basa el diseño por herramientas son incorporar las herramientas' +
      'necesarias para cubrir con la mayoría de las necesidades funcionales del sistema, esto debido a ' +
      'que se sabe que será muy difícil poder implementar toda la funcionalidad que el sistema demanda,' +
      'ya que en ocasiones el tiempo es un factor que influye',
    graph: 'assets/img/DPH.png',
    recommendedProjects: 'Se recomienda mucho para sistemas pequeños donde se pretendan cumplir con los requerimientos' +
      'siento estos requerimientos especificos y detallados del sistema',
    sources: [
      'Gastón, R.. (2015). Técnicas Automáticas para la Elaboración, Validación y Verificación de Requisitos de Software'
    ]
  };
}
