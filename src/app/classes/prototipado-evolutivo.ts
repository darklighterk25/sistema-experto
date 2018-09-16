import { Methodology } from '../interfaces/methodology';

export class PrototipadoEvolutivo {
  public static DATA: Methodology = {
    id: 'prototipado-evolutivo',
    name: 'Prototipado evolutivo',
    characteristics: [
      'Comienza por diseñar e implementar los aspectos de mayor relevancia en el prototipo, enseguida se amplia y se ' +
      'refina el prototipo hasta que se tenga un producto que satisfaga las necesidades del cliente, es entonces que el ' +
      'prototipo se convierte en el producto de software que será entregado al cliente.',
      'Permite que algunas de sus características sean implementadas rápidamente para así poder comprender y aclarar aspectos ' +
      'sobre los requerimientos y funcionalidades del sistema.',
      'A través del prototipado se busca que, tanto el desarrollador como el cliente, se encuentren en una misma sintonía para ' +
      'obtener un buen producto de software.'
    ],
    advantages: [
      'Permite explorar alternativas del diseño y funcionamiento consultándolo con el cliente, pues al tener una mejor comunicación ' +
      'con él se logra ir mejorando el prototipo para asegurar un buen producto final.',
      'Se generan signos visibles desde el principio lo que da impresión de gran velocidad en el desarrollo.',
      'Es útil cuando los desarrolladores no están seguros de la arquitectura o algoritmos adecuados a utilizar. '
    ],
    disadvantages: [
      'Es imposible conocer al inicio del desarrollo del sistema cuanto tiempo será necesario para poder obtener un producto que sea ' +
      'aceptable, ni si quiera se podrá conocer el número de iteraciones a realizar.',
      'Se puede llegar a convertir en un modelo de codificar y corregir.'
    ],
    whoItWorks: 'Es un modelo de ciclo de vida en donde se desarrolla el concepto de sistema a medida que se avanza en el proyecto. ' +
      'Generalmente se empieza desarrollando los aspectos más visibles del sistema, entonces se le presenta al cliente lo realizado ' +
      'y a partir de la retroalimentación que brinde continuar con el desarrollo del prototipo; en algún momento el cliente acordara ' +
      'que el prototipo se lo suficientemente bueno, será entonces cuando se realizaran los últimos ajustes o trabajos pendientes sobre ' +
      'el prototipo para entonces proceder a entregarlos como producto final.',
    graph: 'assets/img/prototipado-evolutivo.png',
    recommendedProjects: 'Es aplicado en los proyectos en los que los requerimientos cambian con rapidez, cuando no se pueden obtener ' +
      'de manera clara los requerimientos del sistema, cuando ni el desarrollador ni el cliente identifican el área de aplicación del ' +
      'sistema o cuando el desarrollador no está seguro de los algoritmos o arquitectura a utilizar para el desarrollo del sistema.',
    sources: [
      'McConnel, S.. (1997). Desarrollo y gestión de proyectos informáticos. España: McGraw-Hill.'
    ]
  };
}
