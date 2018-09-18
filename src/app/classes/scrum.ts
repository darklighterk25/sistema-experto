import { Methodology } from '../interfaces/methodology';

export class Scrum {
  public static DATA: Methodology = {
    id: 'scrum',
    name: 'Scrum',
    isAgile: true,
    characteristics: [
      'Gestión regular de las expectativas del cliente',
      'resultados anticipados',
      'flexibilidad y adaptación',
      'retorno de inversión',
      'mitigación de riesgos',
      'equipo motivado'
    ],
    advantages: [
      'Flexión de cambio.',
      'Mayor productividad (Equipo de trabajo más motivado).',
      'Reducción de riesgos.',
      'Cumplimiento de expectativas.',
      'Predicciones de tiempos: se conoce la velocidad media del equipo por sprint.',
      'Programación Organizada.',
      'Los problemas se identifican con suficiente antelación a través de las reuniones diarias y por lo tanto se pueden resolver con ' +
      'rapidez.',
      'Es más fácil para entregar un producto de calidad en un tiempo programado.',
      'Alineamiento entre el cliente y el equipo de desarrollo.'

    ],
    disadvantages:[
      'Plantea un problema si el desarrollo esta restringido por una fecha de entrega y un precio de entrega cerrados por contrato.',
      'Supone que el equipo está muy formado y motivado.',
      'Funciona bien solo en equipos pequeños.',
      'Esta metodología necesita sólo los miembros del equipo con experiencia. Si el equipo está formado por personas que son novatos, ' +
      'el proyecto no se puede completar en el tiempo.',
      'Si alguno de los miembros del equipo dejan el desarrollo del proyecto, puede tener un enorme efecto inverso en el proyecto',
      'Es necesario que el equipo de trabajo sea auto organizado',
      'Depende en gran medida de la interacción del cliente, por lo que si el cliente no está claro, el equipo se puede conducir en la ' +
      'dirección equivocada.'
    ],
    whoItWorks: 'Scrum es un proceso en el que se aplican de manera regular un conjunto de buenas prácticas para trabajar ' +
      'colaborativamente, en equipo, y obtener el mejor resultado posible de un proyecto. Estas prácticas se apoyan unas a otras y su ' +
      'selección tiene origen en un estudio de la manera de trabajar de equipos altamente productivos.'+
      'En Scrum se realizan entregas parciales y regulares del producto final, priorizadas por el beneficio que aportan al receptor del ' +
      'proyecto. ',
    graph: 'assets/img/scrum.jpg',
    recommendedProjects: 'Scrum está especialmente indicado para proyectos en entornos complejos, donde se necesita obtener resultados ' +
      'pronto, donde los requisitos son cambiantes o poco definidos, donde la innovación, la competitividad, la flexibilidad y la ' +
      'productividad son fundamentales.',
    sources: [
      'https://proyectosagiles.org/que-es-scrum/'
    ]
  };
}
