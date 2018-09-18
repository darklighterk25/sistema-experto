import { Methodology } from '../interfaces/methodology';
import { SOURCE } from '@angular/core/src/di/injector';
export class ProcesoUnificadoDeDesarrolloDeSoftware {
  public static DATA: Methodology = {
    id: 'proceso-unificado-de-desarrollo-de-software',
    name: 'Proceso Unificado De Desarollo De Software',
    characteristics: [
      'Perspectiva dinámica (que muestra las fases del modelo a lo largo del tiempo),',
      'Perspectiva estática (que muestra las actividades del proceso que se promulgan)',
      'Perspectiva practica (que sugiere buenas prácticas para que sean usadas durante el proceso).'
    ],
    advantages: [
      'Puede revisar varias veces el sistema desarrollado con el fin de encontrar errores y poder corregirlos.' +
      'Es flexible y adaptable a cambios en los requerimientos.',
      'Los sistemas que se crean son robustos y fáciles de mantener debido a que utilizan una programación por componentes.',
      'En cada iteración se tiene un producto entregable pues solo se le van agregando o modificando funcionalidades.'
    ],
    disadvantages: [
      'Es muy costoso por lo que no es viable.',
      'Es aplicable en proyectos pequeños, además si desde un principio no se hace una buena estructuración se pueden convertir en un ' +
      'proyecto grande y difícil de manejar.'
    ],
    whoItWorks: 'Las fases de este modelo están más dirigidas hacia el negocio en lugar de las preocupaciones técnicas. La ' +
      'descripción de las fases se mencionara a continuación. En la primer etapa se tiene que establecer un caso de negocio para el ' +
      'sistema, en donde se identifican todas las entidades externas, como las personas o los sistemas, que van a interactuar con el ' +
      'sistema, entonces se utilizara esta información para definir qué tanta contribución hace el sistema al negocio, si es una ' +
      'contribución muy pequeña el proyecto se cancela.',
    graph: 'assets/img/ProcesoUnificado.jpg',
    recommendedProjects: 'es un modelo de software que permite el desarrollo de software a gran escala, mediante un proceso continuo ' +
      'de pruebas y retroalimentacionm, garantizando el cumplimiento de ciertos estadares de calidad.',
    sources: null
  };
}
