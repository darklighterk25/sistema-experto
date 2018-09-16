import { Methodology } from '../interfaces/methodology';

export class EntregaEvolutiva {
  public static DATA: Methodology = {
    id: 'entrega-evolutiva',
    name: 'Entrega evolutiva',
    characteristics: [
      'Se basa en el principio de hacer énfasis en el núcleo del sistema al inicio el modelo, que hace referencia a funciones ' +
      'de bajo nivel que probablemente no van a ser modificadas por el cliente cuando se le pida su retroalimentación.',
      'Utiliza las técnicas de desarrollo incremental, las cuales permiten reducir el riesgo de fallos al dividir el proyecto ' +
      'en subsistemas más pequeños que son más fáciles de implementar, mantener, modificar y actualizar,  este tipo de técnicas ' +
      'son utilizadas en las fases del modelo para generar versiones del sistema. ',
      'Provee el control que se obtiene en el modelo de entrega por etapas y además provee la flexibilidad que tiene el modelo ' +
      'de prototipado evolutivo.'
    ],
    advantages: [
      'Se le puede dar la flexibilidad o el control que se le quiera dar, pues es una combinación de los modelos prototipado evolutivo ' +
      'y entregas por etapas.',
      'Como se tiene comunicación con el cliente es más probable que se obtenga un mejor sistema gracias a la retroalimentación.',
      'Se pueden hacer entregas rápidas de versiones.'
    ],
    disadvantages: [
      'No es muy estructurado, pues en ocasiones se realizan muchos cambios que pueden afectar directamente a la estructura del sistema ' +
      'y puede resultar muy costoso el mantenimiento.',
      'para poder hacer entregas rápidas es necesario hacer uso de herramientas que en ocasiones no son compatibles con otras o que no' +
      ' todas las personas saben usar.',
      'Una última desventaja es la falta de documentación, pues al existir muchas versiones, y en ocasiones demasiados cambios, no se ' +
      'puede hacer la documentación que refleje los cambios del sistema, lo cual dificulta el mantenimiento del mismo.'
    ],
    whoItWorks: 'Es un modelo de ciclo de vida que se encuentra combinado entre el prototipo evolutivo y la entrega por etapas. ' +
      'Se tiene que desarrollar una versión del producto, el cual es mostrado al cliente y se refina conforme a la retroalimentación ' +
      'que brinde el cliente. El parecido entre este modelo y el prototipado evolutivo  depende de hasta qué punto se lleva a cabo la ' +
      'planificación para adaptarse a las solicitudes del cliente, si está planificado para adaptarse a las solicitudes entonces si se ' +
      'asemejara al prototipado evolutivo, pero si se planifica para adaptarse a pocas solicitudes de modificación, entonces se parecerá ' +
      'más a la entrega por etapas.',
    graph: 'assets/img/entrega-evolutiva.png',
    recommendedProjects: 'Puede ser aplicado a proyectos en los que los requerimientos cambian con rapidez, cuando no se pueden obtener ' +
      'de manera clara los requerimientos del sistema, cuando ni el desarrollador ni el cliente identifican el área de aplicación del ' +
      'sistema o cuando el desarrollador no está seguro de los algoritmos o arquitectura a utilizar para el desarrollo del sistema, ' +
      'debido a que presenta la flexibilidad del modelo de prototipado evolutivo, pero también puede ser usado para proyectos en los que' +
      ' se tiene mayor conocimiento de los requerimientos del sistema, debido a que provee características del modelo de entrega por ' +
      'etapas.',
    sources: [
      'McConnel, S.. (1997). Desarrollo y gestión de proyectos informáticos. España: McGraw-Hill.'
    ]
  };
}
