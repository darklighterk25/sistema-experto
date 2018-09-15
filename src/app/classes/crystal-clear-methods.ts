import { Methodology } from '../interfaces/methodology';

export class CrystalClearMethods {
  public static DATA: Methodology = {
    id: 'crystal-clear-methods',
    name: 'Crystal Clear Methods',
    characteristics: [
      'Entrega frecuente. Consiste en entregar software a los clientes con frecuencia, no solamente compilar el código. La frecuencia ' +
      'dependerá del proyecto, pero puede ser diaria, semanal o  mensual.',
      'Comunicación osmótica. Todos juntos en el mismo cuarto. Una variante especial es disponer en la  sala de un experto diseñador ' +
      'senior y discutir respecto del tema que se trate.',
      'Mejora reﬂexiva. Tomarse un pequeño tiempo (unas pocas horas cada o una vez al mes) para pensar bien qué se está haciendo, ' +
      'cotejar notas, reﬂexionar, discutir.',
      'Seguridad personal. Hablar con los compañeros cuando algo molesta dentro del grupo.',
      'Foco. Saber lo que se está haciendo y tener la tranquilidad y el tiempo para hacerlo.',
      'Fácil acceso a usuarios expertos. Tener alguna comunicación con expertos desarrolladores.'
    ],
    advantages: [
      'Es apropiada para entornos ligeros.',
      'Al estar diseñada para el cambio experimenta reducción de costo.',
      'Presenta una planificación más transparente para los clientes.',
      'Se definen en cada iteración cuales son los objetivos de la siguiente.',
      'Permite tener una muy útil realimentación de los usuarios.'
    ],
    disadvantages: [
      'Delimita el alcance del proyecto con el cliente.'
    ],
    whoItWorks: 'Crystal es una metodología de desarrollo de Software ágil, que en realidad está considerada como una “familia de ' +
      'metodologías” debido a que se subdivide en varios tipos de metodologías en función a la cantidad de personas que vayan a ' +
      'conformar el proyecto. Creada por Alistair Cockburn.\n' +
      '\n' +
      'Crystal Clear es una familia de metodologías con un “código genético” común.\n' +
      '\n' +
      'El nombre Crystal deriva de la caracterización de los proyectos según 2 dimensiones, tamaño y complejidad. Por ejemplo:\n' +
      '\n' +
      'Clear es para equipos de hasta 6 personas o menos.\n' +
      'Amarillo para equipos entre 7 a 20 personas.\n' +
      'Naranja para equipos entre 21 a 40 personas.\n' +
      'Roja  para equipos entre 41 a 80 personas.\n' +
      'Marron para equipos entre 81 a 200 personas.\n' +
      'CC puede ser usado en proyectos pequeños y como casi todos los otros métodos, CC consiste en valores, técnicas y procesos.\n' +
      '\n' +
      'En primera instancia se especiﬁcan los antecedentes de la metodología, continuando con deﬁniciones que ayudan a estructurar la ' +
      'fundamentación teórica y se termina con las características esenciales de los diferentes tipos de Crystal.\n' +
      '\n' +
      'Crystal da vital importancia a las personas que componen el equipo de un proyecto, y por tanto sus puntos de estudio son:\n' +
      '\n' +
      '* Aspecto humano del equipo\n' +
      '* Tamaño de un equipo (número de componentes)\n' +
      '* Comunicación entre los componentes\n' +
      '* Distintas políticas a seguir\n' +
      '* Espacio físico de trabajo',
    graph: 'assets/img/ccm.png',
    recommendedProjects: 'Proyectos pequeños que requieren una extensa comunicación con el cliente.',
    sources: [
      'https://folderit.net/itech/desarrollo-agil-de-software-crystal-clear/',
      'https://vencees.wordpress.com/ventajas-y-desventajas/'
    ]
  };
}
