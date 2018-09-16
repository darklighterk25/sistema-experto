import { Methodology } from '../interfaces/methodology';

export class Espiral {
  public static DATA: Methodology = {
    id: 'espiral',
    name: 'Espiral',
    characteristics: [
      'Orientado a riesgos.',
      'Se basa la división de mini proyectos del sistema completo y la correcta identificación de riesgos para poder controlarlos ' +
      'y erradicarlos.',
      'Cada miniproyecto se centra en uno o más riesgos importantes.',
      'Después de controlar todos los riesgos finaliza del mismo modo que el modelo de cascada.',
      'Se parte de una escala pequeña en medio de la espiral, se localizan riesgos, se genera un plan para manejar los riesgos y se ' +
      'establece una aproximación a una nueva iteración.',
      'Se hacen tantas iteraciones como necesidades tenga el proyecto.'
    ],
    advantages: [
      'Mientras los costos suben los riesgos disminuyen, es decir, entre más tiempo y dinero sea empleado, menores serán' +
      ' los riesgos que es lo que se desea con un proyecto de desarrollo rápido. ',
      'Proporciona tanto control sobre el sistema como un modelo de cascada tradicional debido a que al final de cada ' +
      'iteración se tiene una etapa de verificación.',
      'Como el proyecto está orientado a riesgos, desde un principio puede identificarse si el proyecto puede realizarse o ' +
      'no, ya sea por razones técnicas u otros tipos de razones, lo cual evita hacer un coste excesivo para implementar el sistema.'
    ],
    disadvantages: [
      'Es muy costoso.',
      'Es un modelo muy complicado de implementar, requiere de un manejo atento, cuidadoso y de gran nivel de conocimiento.',
      'En ocasiones puede ser muy difícil la definición de objetivos para comprobar si se puede pasar a la siguiente iteración ' +
      'o todavía no.',
      'Resulta difícil convencer a grandes clientes de que el enfoque evolutivo es controlable.',
      'Debido a su elevada complejidad no se aconseja utilizarlo en pequeños sistemas.',
      'Genera mucho tiempo en el desarrollo del sistema.'
    ],
    whoItWorks: 'Está orientado a riesgos que divide el sistema completo en una serie de mini proyectos de software, donde cada ' +
      'uno de ellos se centra en uno o varios riesgos importantes hasta que todos ellos estén correctamente controlados. Cuando ' +
      'se habla de riesgo se refiere a la implementación de un requerimiento que es poco comprensible, arquitecturas poco ' +
      'comprensibles,  problemas de ejecución importantes, problemas con la tecnología subyacente, ente otros aspectos. Después de ' +
      'haber controlado todos los riesgos que se presentaron entonces el modelo finaliza del mismo modo que el modelo de cascada.',
    graph: 'assets/img/espiral.png',
    recommendedProjects: 'No se recomienda el uso de este modelo para proyectos sencillos ya que es un modelo muy complicado. Es ' +
      'mejor utilizarlo para proyectos que sean más complejos y críticos, pues es en los que se necesita una gran reducción de ' +
      'riesgos con el fin de obtener un sistema exitoso.',
    sources: [
      'McConnel, S.. (1997). Desarrollo y gestión de proyectos informáticos. España: McGraw-Hill.'
    ]
  };
}
