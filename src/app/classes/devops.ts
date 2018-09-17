import { Methodology } from '../interfaces/methodology';

export class Devops {
  public static DATA: Methodology = {
    id: 'devops',
    name: 'Devops',
    isAgile: true,
    characteristics: [
      'Desarrolladores, probadores y especialistas en operaciones trabajan en colaboración mediante las herramientas compartidas de ' +
      'DevOps.',
      'Corrige desalineaciones de personas y objetivos creando vínculos más cercanos entre desarrolladores y operaciones.',
      'Incorpora el feedback de los clientes en el proceso de desarrollo para acelerar la respuesta a errores y mejoras.',
      'Facilita la entrega continua de software gracias a la realización de pruebas en colaboración y la supervisión continua de los ' +
      'entornos de desarrollo, integración y transferencia.',
      'Las herramientas facilitan la gestión de releases, el suministro de la infraestructura, la orquestación, la supervisión, la ' +
      'inclusión en contenedores, la virtualización y la automatización.'
    ],
    advantages: [
      'Despliegue más frecuente',
      'Tiempos de entrega más rápidos',
      'Mejores tiempos de recuperación y menor numero de errores por cambios',
      'Menos tiempo resolviendo aspectos de seguridad'
    ],
    disadvantages: [
      'Necesaria comunicacion con el cliente',
      'Necesario personal capacitado con la metodología'
    ],
    whoItWorks: 'DevOps es un conjunto de prácticas que automatizan los procesos entre los equipos de desarrollo de software y TI para ' +
      'que puedan compilar, probar y publicar software con mayor rapidez y fiabilidad. El concepto de DevOps se basa en establecer una ' +
      'cultura de colaboración entre equipos que, tradicionalmente, trabajaban en grupos aislados. Entre las ventajas que promete, se ' +
      'incluyen el aumento de la confianza y de la velocidad de publicación de software, la capacidad de solucionar incidencias críticas ' +
      'rápidamente y una mejor gestión del trabajo imprevisto.',
    graph: './src/assets/img/devops.png',
    recommendedProjects: 'Proyectos pequeños con entrega continua y con comunicacion con el cliente',
    sources: [
      'https://es.atlassian.com/devops'
    ]
  };
}
