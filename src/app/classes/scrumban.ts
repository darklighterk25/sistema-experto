import { Methodology } from '../interfaces/methodology';

export class ScrumBan {
  public static DATA: Methodology = {
    id: 'scrumban',
    name: 'Scrumban',
    isAgile: true,
    characteristics: [
      'Necesaria una definicion de roles',
      'Las reuniones se planean para asegurar la continuidad de requerimientos',
      'Los cambios son controlados según el flujo de trabajo que se tenga en ese momento.',
      'Existe un flujo continuo de iteraciones.'
    ],
    advantages: [
      'Permite conocer el estado real del proceso de ejecución del proyecto.',
      'Introduce soluciones oportunas ante eventuales errores.',
      'Permite un mayor análisis de tareas realizadas.',
      'Mejora la interacción entre los miembros de un grupo en las reuniones periódicas.',
      'Aumenta la productividad de proyectos complejos o multiproyectos.',
      'Favorece una mayor adaptabilidad de las herramientas a las exigencias del proyecto.'
    ],
    disadvantages: null,
    whoItWorks: 'La metodología Scrumban nace de la combinación de principios de los métodos ágiles de gestión de proyectos más ' +
      'importantes en la actualidad: Scrum y Kanban. Aunque en principio pueden parecer iguales, las dos estrategias de gestión ' +
      'presentan diferencias en la manera de ejecutar el proyecto. Es por eso que el novedoso plan Scrumban se encarga de combinar ' +
      'aquellos elementos que resultan complementarios. Por ejemplo, una de las combinaciones más usadas en el plano empresarial, es la ' +
      'de gestionar las tareas previstas con el método Scrum y planificar los errores con el método Kanban.',
    graph: 'assets/img/scrumban.png',
    recommendedProjects: 'Proyectos de mantenimiento: aquellos en los que resulta indispensable la presentación de resultados de forma ' +
      'parcial para seguir avanzando.' +
      '\nProyectos en los que los requisitos varíen con frecuencia: aquellos en los que el cliente no tiene fijadas las condiciones y ' +
      'expectativas del proyecto y éstas se van introduciendo a lo largo de las distintas etapas.' +
      '\nProyectos en los que surjan errores de ejecución: aquellos en los que se deba replantear el método usado y analizar ' +
      'retrospectivamente la evolución de las tareas.',
    sources: [
      'https://www.obs-edu.com/int/blog-project-management/temas-actuales-de-project-management/la-metodologia-scrumban-cuando-y-por-que-' +
      'utilizarla'
    ]
  };
}
