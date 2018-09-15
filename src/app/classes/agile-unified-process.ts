import { Methodology } from '../interfaces/methodology';

export class AUP {
  public static DATA: Methodology = {
    id: 'aup',
    name: 'aup',
    characteristics: [
      'El personal sabe lo que está haciendo. La gente no va a leer detallado el proceso de documentación, pero algunos quieren una orientación de alto nivel y / o formación de vez en cuando. La AUP producto proporciona enlaces a muchos de los detalles, si usted está interesado, pero no obliga a aquellos que no lo deseen.',
      'Simplicidad. Todo se describe concisamente utilizando un puñado de páginas, no miles de ellos.',
      'Agilidad.El ajuste a los valores y principios de la Alianza Ágil',
      'Centrarse en actividades de alto valor. La atención se centra en las actividades que se ve que son esenciales para el de desarrollo, no todas las actividades que suceden forman parte del proyecto.',
      'Independencia de herramientas. Usted puede usar cualquier conjunto de herramientas que usted desea con el ágil UP. Lo aconsejable es utilizar las herramientas que son las más adecuadas para el trabajo, que a menudo son las herramientas simples o incluso herramientas de código abierto.',
      'Adaptación de este producto para satisfacer sus propias necesidades. EL producto es de fácil acomodo común a través de cualquier herramienta de edición de HTML. No se necesita comprar una herramienta especial, o tomar un curso, para adaptar la AUP.'
    ],
    advantages: [
      'No obliga al conocimiento a detalle',
      'Simplicidad apuntes concretos y breves',
      'Es un proceso simplificado de RUP',
      'Se centra en actividades de alto valor, estrictamente necesarias para el desarrollo'
    ],
    disadvantages: null,
    whoItWorks: 'Al igual que en RUP, en AUP se establecen cuatro fases que transcurren de manera consecutiva y que acaban con hitos claros alcanzados:\n'+
    'Inception(Concepción): El objetivo de esta fase es obtener una comprensión común clienteequipo de desarrollo del alcance del nuevo sistema y definir una o varias arquitecturas candidatas para el mismo.\n'+
    'Elaboración: El objetivo es que el equipo de desarrollo profundice en la comprensión de los requisitos del sistema y en validar la arquitectura.\n'+
    'Construcción: Durante la fase de construcción el sistema es desarrollado y probado al completo en el ambiente de desarrollo.\n'+
    'Transición: el sistema se lleva a los entornos de preproducción donde se somete a pruebas de validación y aceptación y finalmente se despliega en los sistemas de producción.',
    graph: './src/assets/img/devops.png',
    recommendedProjects: null,
    sources: [
      'http://www.ambysoft.com/unifiedprocess/agileUP.html'
    ]
  };
}