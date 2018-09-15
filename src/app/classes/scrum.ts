import { Methodology } from '../interfaces/methodology';

export class Scrum {
  public static DATA: Methodology = {
    id: 'scrum',
    name: 'scrum',
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
        'Los problemas se identifican con suficiente antelación a través de las reuniones diarias y por lo tanto se pueden resolver con rapidez.',
        'Es más fácil para entregar un producto de calidad en un tiempo programado.',
        'Alineamiento entre el cliente y el equipo de desarrollo.'

    ],
    disadvantages: null,
    whoItWorks: 'Planificación de la iteración'+
    'El primer día de la iteración se realiza la reunión de planificación de la iteración. Tiene dos partes:'+
    'Selección de requisitos (4 horas máximo). El cliente presenta al equipo la lista de requisitos priorizada'+
    ' del producto o proyecto. El equipo pregunta al cliente las dudas que surgen y selecciona los requisitos '+
    'más prioritarios que se compromete a completar en la iteración, de manera que puedan ser entregados si el cliente'+
    'lo solicita.'+
    'Planificación de la iteración (4 horas máximo). El equipo elabora la lista de tareas de la iteración necesarias'+
    ' para desarrollar los requisitos a que se ha comprometido. La estimación de esfuerzo se hace de manera conjunta '+
    'y los miembros del equipo se autoasignan las tareas.'+
    'Ejecución de la iteración'+

    'Cada día el equipo realiza una reunión de sincronización (15 minutos máximo), normalmente delante de un tablero'+
    ' físico o pizarra (Scrum Taskboard). Cada miembro del equipo inspecciona el trabajo que el resto está realizando'+
    ' (dependencias entre tareas, progreso hacia el objetivo de la iteración, obstáculos que pueden impedir este'+
    ' objetivo) para poder hacer las adaptaciones necesarias que permitan cumplir con el compromiso adquirido.'+
    'Durante la iteración el Facilitador (Scrum Master) se encarga de que el equipo pueda cumplir con su compromiso'+
    ' y de que no se merme su productividad.'+
    'Elimina los obstáculos que el equipo no puede resolver por sí mismo.'+
    'Protege al equipo de interrupciones externas que puedan afectar su compromiso o su productividad.'+
    'Durante la iteración, el cliente junto con el equipo refinan la lista de requisitos (para prepararlos'+
    ' para las siguientes iteraciones) y, si es necesario, cambian o replanifican los objetivos del proyecto'+
    ' para maximizar la utilidad de lo que se desarrolla y el retorno de inversión.'+
    'Inspección y adaptación'+
    'El último día de la iteración se realiza la reunión de revisión de la iteración. Tiene dos partes:'+
    'Demostración (4 horas máximo). El equipo presenta al cliente los requisitos completados en la iteración,'+
    ' en forma de incremento de producto preparado para ser entregado con el mínimo esfuerzo. En función de los'+
    ' resultados mostrados y de los cambios que haya habido en el contexto del proyecto, el cliente realiza las '+
    'daptaciones necesarias de manera objetiva, ya desde la primera iteración, replanificando el proyecto.'+
    'Retrospectiva (4 horas máximo). El equipo analiza cómo ha sido su manera de trabajar y cuáles son los '+
    'problemas que podrían impedirle progresar adecuadamente, mejorando de manera continua su productividad.'+
    ' El Facilitador se encargará de ir eliminando los obstáculos identificados.',
    graph: './src/assets/img/scrum.png',
    recommendedProjects: null,
    sources: [
      'https://kanbantool.com/es/metodologia-kanban'
    ]
  };
}
