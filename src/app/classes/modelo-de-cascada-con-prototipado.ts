import { Methodology } from '../interfaces/methodology';

export class ModeloDeCascadaConPrototipado {
  public static DATA: Methodology = {
    id: 'modelo-de-cascada-con-prototipado',
    name: 'Modelo de cascada con prototipado',
    characteristics: [
      'El prototipado es un subproceso.',
      'A menudo la interfaz de usuario se construye y se prueba como un prototipo, de modo que los usuarios comprendan qué aspecto ' +
      'tendrá el nuevo sistema y los diseñadores se orienten correctamente sobre la forma en que el usuario quiere interactuar con el ' +
      'sistema.'
    ],
    advantages: [
      'provee son las mismas que el modelo de cascada provee pero añadiendo la ventaja más importante que es la disminución de riesgos ' +
      'en alguna parte especifica del sistema, principalmente permitiendo entender de mejor manera los requerimientos del sistema y ' +
      'hacer una mejor arquitectura de este antes de pasar a la fase de descripción detallada del sistema.',
      'El prototipado del diseño ayuda a los desarrolladores a evaluar estrategias de diseño alternativas.',
      'La verificación asegura que cada función trabaja correctamente.',
      'La validación asegura que se han implementado todos los requerimientos.',
      'El prototipado es útil para la validación y verificación.'
    ],
    disadvantages: [
      'Existe menos documentación que en le modelo de cascada, debido a que los prototipos cambian rápidamente.',
      'Las modificaciones en los prototipos  pudieron degradar la estructura del sistema.',
      'Es imposible conocer al inicio del desarrollo del sistema cuanto tiempo será necesario para poder ' +
      'obtener un producto que sea aceptable.'
    ],
    whoItWorks: 'Se basa en el modelo de cascada, por lo que se manejan las mismas fases, pero se realiza la incorporacion de ' +
      'prototipado. Esto último se refiere a que es un producto parcialmente desarrollado que permite que clientes y desarrolladores ' +
      'examinen algunos aspectos del sistema propuesto, y decidan si éste es adecuado o correcto para el producto terminado.',
    graph: 'assets/img/modelo-de-cascada-con-prototipado.png',
    recommendedProjects: 'Este modelo podría ser utilizado para proyectos en los que no se tiene tanto conocimiento de los' +
      ' requerimientos iniciales como en el modelo de cascada, por lo que gracias al prototipado se pueden ir definiendo esos' +
      'aspectos. Además no es recomendable para sistemas que son largos y complejos, los cuales requieren una mejor organización ' +
      'y arquitectura',
    sources: null
  };
}
