import { Methodology } from '../interfaces/methodology';

export class DynamicSystemsDevelopmentMethod {
  public static DATA: Methodology = {
    id: 'dynamic-systems-development-method',
    name: 'Dynamic Systems Development Method',
    isAgile: true,
    characteristics: [
      'Busca involucrar al cliente es la clave para llevar un proyecto eficiente y efectivo.',
      'El equipo del proyecto debe tener el poder para tomar decisiones que son importantes.',
      'DSDM se centra en la entrega frecuente de productos.',
      'El desarrollo es iterativo e incremental.',
      'Todos los cambios durante el desarrollo son reversibles.',
      'Las pruebas son realizadas durante todo el ciclo vital del proyecto.',
      'La comunicación y cooperación entre todas las partes interesadas.'
    ],
    advantages: [
      'La calidad del producto es mejorada a través de la participación de los usuarios a lo largo del ciclo de vida del proyecto y la ' +
      'naturaleza iterativa del desarrollo.',
      'DSDM asegura desarrollos rápidos.',
      'Reduce los costos de proyectos a través de las ventajas mencionadas anteriormente.',
      'Permite realizar cambios de forma fácil.',
      'Permite la reutilización de aplicación a través de los módulos existentes.'
    ],
    disadvantages: [
      'Se necesita una alta participación de los usuarios en el desarrollo, para evitar que los desarrolladores asuman ' +
      'criterios que no son ciertos.',
      'No es una metodología de desarrollo común. El proceso es un tanto difícil de comprender.'
    ],
    whoItWorks: 'El marco DSDM consta de tres fases sucesivas, a saber, el pre-proyecto, el ciclo de vida del proyecto y las fases ' +
      'posteriores a los proyectos. La fase del proyecto de DSDM es el más elaborado de las tres fases. La fase del proyecto del ciclo ' +
      'de vida consiste en 5 etapas que forman un método iterativo, paso a paso en el desarrollo de un SI. Las tres fases y etapas ' +
      'correspondientes se explican ampliamente a continuación.\n' +
      '\n' +
      'Fase 1 - El pre-proyecto: En el anteproyecto fase de proyectos candidatos se identifican, la financiación de proyectos se ' +
      'realiza y el compromiso del proyecto está asegurado. El manejo de estas cuestiones en una fase temprana evita problemas en las ' +
      'etapas posteriores del proyecto.\n' +
      '\n' +
      'Fase 2 - El ciclo vital del proyecto: Representa 5 etapas de un proyecto que tendrá que pasar por la creación de un SI. Las dos ' +
      'primeras etapas son, el estudio de viabilidad y estudio de negocios son las fases secuenciales que se complementan el uno al ' +
      'otro. Después de estas fases, el sistema se desarrolla iterativo e incremental en la iteración del modelo funcional, diseño y ' +
      'construcción de iteración y etapas de ejecución.\n' +
      'Los cinco pasos de la DSDM proyecto del ciclo de vida: estudio de viabilidad (factibilidad), estudio de negocios, modelo de ' +
      'iteración funcional, diseño y construcción de iteración y la implementación.\n' +
      '\n' +
      'Fase 3 - Después del proyecto \n' +
      'La fase posterior al proyecto asegura que el sistema funcione de manera eficaz y eficiente. Esto se realiza por el ' +
      'mantenimiento, mejoras y correcciones de acuerdo a los principios de DSDM. El mantenimiento puede ser visto como desarrollo ' +
      'continuo basado en el carácter iterativo e incremental de DSDM. En lugar de terminar el proyecto en un ciclo por lo general el ' +
      'proyecto puede volver a las fases o etapas previas para que el paso anterior y los productos a entregar se puedan refinar.',
    graph: './src/assets/img/dsdm.png',
    recommendedProjects: 'Proyectos grandes. Limitados por tiempo y recursos con requerimientos cambiantes.',
    sources: [
      'https://sites.google.com/site/utmfci/home/funcionamiento'
    ]
  };
}
