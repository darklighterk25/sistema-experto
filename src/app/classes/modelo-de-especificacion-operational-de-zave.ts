import { Methodology } from '../interfaces/methodology';

export class ModeloDeEspecificacionOperationalDeZave {
    public static DATA: Methodology = {
        id: 'modelo-de-especificacion-operacional-de-zave',
        name: 'Modelo de especificacion operacional de zave',
        characteristics:[
            'se enfoca en las transiciones de un paso entre'+
            'entradas-salidas', 
            'es posible dar una semántica formal para este modelo'
        ],
        advantages:[
            'las especificaciones son'+
            'rigurosas y pueden analizarse formalmente, el prototipado rápido está disponible'+
            'automáticamente, además de que gracias a la separación del problema y la'+
            'implementación se permite una buena mantenibilidad del sistema.'
        ],
        disadvantages:[
            'En cuanto a las desventajas que presenta se encuentra el peligro de decisiones de'+
            'diseño prematuras, la dificultad de comprender las especificaciones formales del'+
            'cliente y los problemas para guiar la transformación del sistema'
        ],
        whoItWorks: 'Este modelo se basa en operaciones, las cuales son una relación de entradasalida'+
        'entre componentes del sistema, donde se caracteriza una transición de'+
        'estados en el sistema, para cada operación se especifica su signatura (variables'+
        'de entrada y salida) y su precondición, postcondición y condición de triggering'+
        '(condición de disparo). Se hace una distinción entre las condiciones de dominio'+
        '(DomPre y DomPost), y las condiciones requeridas, que capturan condiciones'+
        'extras para lograr satisfacer los objetivos.',
        graph: "assets/img/save.jpg",
        sources: null

    };
}
