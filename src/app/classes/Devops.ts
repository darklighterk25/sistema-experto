import { Methodology } from '../interfaces/methodology';

export class Devops {
  public static DATA: Methodology = {
    id: 'devops',
    name: 'devops',
    characteristics: [
      'Desarrolladores, probadores y especialistas en operaciones trabajan en colaboración mediante las herramientas compartidas de DevOps.',
      'Corrige desalineaciones de personas y objetivos creando vínculos más cercanos entre desarrolladores y operaciones.',
      'Incorpora el feedback de los clientes en el proceso de desarrollo para acelerar la respuesta a errores y mejoras.',
      'Facilita la entrega continua de software gracias a la realización de pruebas en colaboración y la supervisión continua de los entornos de desarrollo, integración y transferencia.',
      'Las herramientas facilitan la gestión de releases, el suministro de la infraestructura, la orquestación, la supervisión, la inclusión en contenedores, la virtualización y la automatización.'
    ],
    advantages: [
      'Despliegue más frecuente',
      'Tiempos de entrega más rápidos',
      'Mejores tiempos de recuperación y menor numero de errores por cambios',
      'Menos tiempo resolviendo aspectos de seguridad'
    ],
    disadvantages: null,
    whoItWorks: '1. Desarrollo:En esta etapa DevOps, el desarrollo del software se lleva a cabo constantemente. En esta fase, todo el proceso de desarrollo se divide en pequeños ciclos de desarrollo. Esto beneficia al equipo DevOps para acelerar el desarrollo de software y el proceso de entrega.\n'+
    '2. Prueba: El equipo de QA usa herramientas como Selenium para identificar y corregir errores en la nueva pieza de código.\n'+
    '3. Integración: En esta etapa, la nueva funcionalidad se integra con el código vigente y las pruebas se llevan a cabo. El desarrollo continuo solo es posible debido a la integración y pruebas continuas.\n'+
    '4. Despliegue: En esta fase, el proceso de implementación se lleva a cabo de manera continua. Se realiza de tal manera que cualquier cambio realizado en cualquier momento en el código, no debe afectar el funcionamiento del sitio web de alto tráfico.\n'+
    '5. Monitoreo: En esta fase, el equipo de operación se encargará del comportamiento inadecuado del sistema o errores que se encuentran en la producción.',
    graph: './src/assets/img/devops.png',
    recommendedProjects: null,
    sources: [
      'https://kanbantool.com/es/metodologia-kanban'
    ]
  };
}
