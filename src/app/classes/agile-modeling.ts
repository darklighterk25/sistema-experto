import { Methodology } from '../interfaces/methodology';

export class AgileModeling {
  public static DATA: Methodology = {
    id: 'agile-modeling',
    name: 'Agile Modeling',
    characteristics: [
      'Asumir simplicidad.',
      'Bienvenido el cambio.',
      'Permitir el siguiente esfuerzo es el objetivo secundario.',
      'Cambio incremental.',
      'Maximizar la inversión de las partes interesadas en el proyecto.',
      'Modelar con un propósito.',
      'Múltiples modelos.',
      'Trabajo de calidad.',
      'Rápida retroalimentación.',
      'El software es el objetivo primario.',
      'Viaje con poco equipaje.'
    ],
    advantages: [
      'Ágil ofrece un modelo increíblemente flexible, que permite adaptarse evolutivamente a las necesidades de un mundo cambiante. El ' +
      'proyecto se divide en pequeñas tareas desarrolladas por grupos independientes que trabajan simultáneamente e interaccionan ' +
      'entre ellos. Los clientes intervienen y las pruebas del producto ocurren simultáneamente a la realización del proyecto, con lo ' +
      'cual se consigue una mejora continua y una adecuación constante del producto a las necesidades reales.',
      'La metodología Ágil es especialmente útil cuando el objetivo del proyecto no está claramente definido o cuando el cliente no ' +
      'conoce cuáles son exactamente sus necesidades. El feedback mutuo entre el equipo del proyecto y los clientes, conseguirá que ' +
      'progresivamente los objetivos del cliente y el producto facilitado por el equipo vayan convergiendo hacia un mismo punto, ' +
      'consiguiendo un resultado satisfactorio.',
      'En estas metodologías la comunicación cobra un papel fundamental, tanto entre los miembros del equipo, entre los diferentes ' +
      'equipos que se reparten las tareas de un proyecto, y entre todos estos y los clientes.',
      'La comunicación integra los procesos de desarrollo, consigue la cohesión entre el personal y los clientes y garantiza la ' +
      'coherencia del resultado del proyecto con los objetivos que se van planteando de manera dinámica.'
    ],
    disadvantages: null,
    whoItWorks: 'El Modelado Ágil es una metodología basada en la práctica para modelado efectivo de sistemas de software. La ' +
      'metodología AM es una colección de prácticas, guiadas por principios y valores que pueden ser aplicados por profesionales de ' +
      'software en el día a día. AM no es un proceso prescriptivo, ni define procedimientos detallados de como crear un tipo de modelo ' +
      'dado. En lugar de eso, sugiere prácticas para ser un modelador efectivo. Es "suave al tacto", no es duro y es rápido -- piense ' +
      'en AM como un arte, no una ciencia.',
    graph: './src/assets/img/am.png',
    recommendedProjects: null,
    sources: [
      'http://agilemodeling.com/shared/AMPamphletSpanish.pdf',
      'http://www.itmplatform.com/es/blog/ventajas-e-inconvenientes-de-metodologias-agil-y-predictiva/'
    ]
  };
}
