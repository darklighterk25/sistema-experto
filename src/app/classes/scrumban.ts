import { Methodology } from '../interfaces/methodology';

export class ScrumBan {
  public static DATA: Methodology = {
    id: 'scrumban',
    name: 'scrumban',
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
    whoItWorks: 'Cada tarjeta visual debe contener la siguiente información: descripción de la actividad,'+
    'fecha en que el elemento se agrega al tablero, fecha límite de entrega (si aplica), el nivel de prioridad'+
     'y el nombre de la persona que trabaja en la actividad en el momento actual. Los integrantes del equipo,'+
     'al momento de comenzar a realizar una actividad que se encuentre en la columna de selección de tareas'+
     'deben tomar en cuenta la información sobre el dato de prioridad que se muestre en la tarjeta, se debe'+
     'considerar en primer lugar las actividades marcadas como “Urgente”, posteriormente las de prioridad “Alta”,'+
     'sino existe ninguna tarjeta con ese tipo de prioridades se debe considerar aquellas en donde la fecha'+
     'límite de entrega está en riesgo y finalmente las actividades más antiguas.'+
     'Las tareas forman parte de una característica (historia), es decir, una característica'+
     'puede tener una o más tareas que tiene que realizar un integrante del equipo para poder ser implementada.'+
     'Las tareas no fluyen a través del tablero, pero su estado es indicado por tarjetas de colores,'+
     'tarjeta en color azul indica que se trata de una tarea que se lleva a cabo para una determinada'+
     'característica, verde indica tarea completada y roja tarea bloqueada, todas estas durante la etapa'+
     'de Construcción; naranja indica que se trata de un defecto encontrado en la etapa de Integración y Pruebas.'+
     'Cuando una característica llega a la etapa de Construcción - Realizado entonces todas las tareas son'+
     'apartadas. Si existen defectos encontrados durante la etapa de Integración y Pruebas entonces tarjetas'+
     'de defectos en color naranja son agregadas dentro de columna Trabajando de dicha etapa',
    graph: './src/assets/img/scrumban.png',
    recommendedProjects: null,
    sources: [
      'https://kanbantool.com/es/metodologia-kanban'
    ]
  };
}
