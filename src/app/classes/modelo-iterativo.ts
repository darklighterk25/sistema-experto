import { Methodology } from '../interfaces/methodology';

export class ModeloIterativo {
  public static DATA: Methodology = {
    id: 'modelo-iterativo',
    name: 'Modelo iterativo',
    characteristics: [
      'Es una derivación del modelo de cascada, pues emplea sus etapas pero les da un enfoque iterativo.',
      'Al ser iterativo permite ir generando mejoras de funcionalidades en cada una de las iteraciones.',
      'Gran participación del cliente durante el desarrollo del sistema, ya que su retroalimentación es ' +
      'parte importante para cumplir con un sistema exitoso.',
      'Provee de soporte para determinar la efectividad de los procesos y de la calidad del producto.',
      'Permite estudiar y después mejorar y ajustar el proceso para el ambiente en particular.'
    ],
    advantages: [
      'La comunicación con el cliente disminuirá el riesgo fallas en los requerimientos y funcionamiento del sistema.',
      'Permite disminuir los riesgos de cambios de requisitos durante el desarrollo del sistema, lo cual reduce costes ' +
      'y tiempos de desarrollo.',
      'En cada iteración se le entrega el producto final al cliente para que pueda trabajar con él.',
      'No hace falta que los requisitos estén totalmente definidos al inicio del desarrollo, sino que se pueden ir refinando ' +
      'en cada una de las iteraciones.',
      'Realizar el desarrollo en pequeños ciclos, lo que permite gestionar mejor los riesgos, gestionar mejor las entrega.'
    ],
    disadvantages: [
      'Es importante ir cuidando las actualizaciones y movimientos que se realizan en cada una de las iteraciones del modelo, ' +
      'siempre cuidando la calidad y estructura del sistema que se está desarrollando.',
      'En este modelo, el no ser necesario tener los requisitos definidos desde el principio, puede verse también como un ' +
      'inconveniente ya que pueden surgir problemas relacionados con la arquitectura.'
    ],
    whoItWorks: 'consiste en un conjunto de iteraciones, donde cada una de ellas utiliza la secuencia de etapas tal como ' +
      'en un modelo de cascada. Una iteración se define entonces como periodo de tiempo donde se produce una versión ejecutable ' +
      'del producto junto con su documentación necesaria. Cada iteración cuenta con una etapa de análisis para determinar cuál ' +
      'va a ser la mejora o cual va a ser la funcionalidad que se va a agregar en esa iteración, además de contar con una etapa ' +
      'final de la iteración en donde se entregara al cliente el modulo elaborado.',
    graph: 'assets/img/modelo-iterativo.jpg',
    recommendedProjects: 'Suele ser utilizado en proyectos en donde no se conocen del todo los requerimientos o no está clara ' +
      'alguna funcionalidad, por lo que se hace necesaria la creación de distintos prototipos para presentarlos y conseguir la ' +
      'conformidad del cliente.',
    sources: [
      'Villada, J. L.. (2015). Desarrollo y optimización de componentes software para tareas administrativas de sistemas. ' +
      'Sin lugar de publicación: IC Editorial.'
    ]
  };
}
