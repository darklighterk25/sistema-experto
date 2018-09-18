import { Methodology } from '../interfaces/methodology';

export class ModeloDeEspecificacionOperationalDeZave {
    public static DATA: Methodology = {
      id: 'modelo-de-especificacion-operacional-de-zave',
      name: 'Modelo de Especificacion Operacional de Zave',
      characteristics: [
        'Se enfoca en las transiciones de un paso entre entradas-salidas.',
        'Es posible dar una semántica formal para este modelo.'
      ],
      advantages: [
        'Las especificaciones son rigurosas y pueden analizarse formalmente.',
        'El prototipado rápido está disponible automáticamente.',
        'Gracias a la separación del problema y la implementación se permite una buena mantenibilidad del sistema.'
      ],
      disadvantages: [
        'Peligro de decisiones de diseño prematuras.',
        'Dificultad de comprender las especificaciones formales del cliente.',
        'Problemas para guiar la transformación del sistema.'
      ],
      whoItWorks: 'Este modelo se basa en operaciones, las cuales son una relación de entradasalida entre componentes del sistema, ' +
        'donde se caracteriza una transición de estados en el sistema, para cada operación se especifica su signatura (variables de ' +
        'entrada y salida) y su precondición, postcondición y condición de triggering (condición de disparo). Se hace una distinción ' +
        'entre las condiciones de dominio (DomPre y DomPost), y las condiciones requeridas, que capturan condiciones extras para lograr ' +
        'satisfacer los objetivos.',
      graph: 'assets/img/save.jpg',
      recommendedProjects: null,
      sources: null
    };
}
