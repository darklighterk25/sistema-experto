import { Methodology } from '../interfaces/methodology';

export class AdaptiveSoftwareDevelopment {
  public static DATA: Methodology = {
    id: 'adaptive-software-development',
    name: 'Adaptive Software Development',
    characteristics: [
      'Iterativo.',
      'Orientado a los componentes de software más que a las tareas en las que se va a alcanzar dicho objetivo.',
      'Tolerante a los cambios.',
      'Guiado por los riesgos.',
      'La revisión de los componentes sirve para aprender de los errores y volver a iniciar el ciclo de desarrollo.'
    ],
    advantages: [
      'Sirve para aprender de los errores y volver a iniciar el ciclo de desarrollo.',
      'Utiliza información disponible acerca de cambios para mejorar el comportamiento del software.',
      'Promulga colaboración, la interacción de personas.'
    ],
    disadvantages: [ 'La prolongación del ciclo de aprendizaje, por errores o cambios que no son detectados en reuniones anteriores ' +
      'afecta tanto a la calidad del producto como a su costo total.',
      'Dado a que es una metodología ágil, esta implica no realizar procesos que son requeridos en las metodologías tradicionales, o ' +
      'por lo menos, no realizarlos en procesos diferentes, lo cual implica que empresas grandes las cuales necesitan llevar un mayor ' +
      'control a procesos y personas, tener tareas asignadas a un estado o proceso especifico, y en las cuales dicho incremento de ' +
      'procesos no afectan en gran medida al costo final del producto. Para dichas empresas el elegir una metodología tradicional ' +
      'resulta mucho mas rentable tanto por el gran volumen de personal, de productos, y de costos que se manejan y para los cuales se ' +
      'tendrá un mayor control.'
    ],
    whoItWorks: 'Consta de tres fases:\n' +
      'Fase de especulación: se inicia el desarrollo del proyecto, En ella se utiliza información como la misión del cliente, las ' +
      'restricciones del proyecto y los requisitos básicos para definir el conjunto de ciclos en el que se harán los incrementos del ' +
      'software.\n' +
      '\n' +
      'Fase de colaboración: se busca que el equipo no solo se comunique o se encuentre completamente integrados, se desea que exista ' +
      'confianza, donde se puedan realizar críticas constructivas, ayudar si resentimientos y poseer un conjunto de actitudes que ' +
      'contribuyan al trabajo que se encuentran realizando.\n' +
      '\n' +
      'El aprendizaje: permite mejorar el entendimiento real sobre la tecnología, los procesos utilizados y el proyecto. El aprendizaje ' +
      'individual permite al equipo tener mayor posibilidad de éxito.\n' +
      '\n' +
      'Cada una de estas fases se unen entre si para llevar a cabo diversas funciones, de manera rápida, y trabajando en equipo, para ' +
      'que en un futuro , obtengamos un software eficiente.',
    graph: 'assets/img/ads.png',
    recommendedProjects: 'Pequeños y medianos.',
    sources: [
      'https://es.wikiversity.org/wiki/Desarrollo_Adaptativo_de_Software',
      'https://issuu.com/cyber107/docs/metodologiaagilasd-100613135636-php',
      'http://grupo4virginio.blogspot.com/2014/10/desarrollo-adaptativo-del-software-das.html',
      'http://ingenieriadesoftware.mex.tl/61154_ASD.html'
    ]
  };
}
