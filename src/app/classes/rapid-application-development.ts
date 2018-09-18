import { Methodology } from '../interfaces/methodology';


export class RapidApplicationDevelopment {
  public static DATA: Methodology = {
    id: 'rapid-aplication-development',
    name: 'Desarrollo rapido de aplicaciones',
    characteristics: [
      'Necesita tener comunicación constante con todas las partes interesadas en el desarrollo del sistema',
      'Se le da más importancia a la parte de codificación que a la documentación de la misma',
      'Otra característica es que van a existir cambios y se debe de tener la capacidad de integrarlos al proyecto de manera natural.'
    ],
    advantages: [
      'Tiene una gran velocidad de desarrollo',
      'Es muy flexible ante los cambios, maneja ciclos de desarrollo cortos',
      'Desde una etapa temprana se pueden verificar los requisitos del sistema.'
    ],
    disadvantages: [
      'Pueden tener una sucesión de prototipos que no sea adaptables al producto final',
      'Los requerimientos deben de estar bien definidos',
      'Además se requiere tener varios desarrolladores',
      'Debe de haber compromiso entre ellos los desarrolladores.'
    ],
    whoItWorks: 'Por objetivo reducir el tiempo de desarrollo de un sistema, basándose en la implementación de una versión que ' +
      'sirve como prototipo y después de esto se pasa a agregar todas las funcionalidades necesarias para satisfacer las ' +
      'necesidades y requerimientos que el usuario solicita, todo este proceso de integración de funcionalidades se hace de manera ' +
      'iterativa.',
    graph : 'assets/img/RAD.jpg',
    recommendedProjects: 'Este modelo no se adecua a sistemas que van a requerir adecuado mantenimiento, pues los prototipos que se ' +
      'realizan puede que no sean escalables. Otro aspecto negativo es que no se puede medir el progreso del sistema, además de que ' +
      'es menos eficiente.',
    sources: [
      'Gastón, R.. (2015). Técnicas Automáticas para la Elaboración, Validación y'+
      'Verificación de Requisitos de Software. Septiembre 1, 2018, de Universidad'+
      'Nacional de Córdoba'
    ]
  };
}
