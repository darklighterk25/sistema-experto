import { Methodology } from '../interfaces/methodology';

export class DAD {
  public static DATA: Methodology = {
    id: 'dad',
    name: 'dad',
    characteristics: [
      'Personas primero: Las personas y como se relacionan son el primer determinante de éxito de la solución del proyecto.',
      'Orientado a aprender: Promueve la idea que los compañeros de equipo deben trabajar juntos y aprender del otro',
      'Hibrido: Adopta estrategias de métodos existentes como Scrum, XP,AM,UP, Kanban. El trabajo de adaptar las distintas técnicas a DAD ya esta hecho.',
      'Ciclo de vida de entrega completa: El ciclo de vida abarca todo el proyecto desde el inicio , la producción hasta las actividades de producción post-entrega.',
      'Las herramientas facilitan la gestión de releases, el suministro de la infraestructura, la orquestación, la supervisión, la inclusión en contenedores, la virtualización y la automatización.'
    ],
    advantages: [
      'Admite la adaptación de procesos al hacer que las decisiones de proceso sean explícitas.',
      'Permite una escala efectiva al guiarlo a través de la adaptación de su estrategia para reflejar las realidades de los factores de escala que enfrenta.',
      'Hace que las opciones de proceso sean muy claras y, por lo tanto, facilita la identificación de la estrategia adecuada para la situación en la que se encuentra.',
      'Elimina las conjeturas de la extensión de los métodos ágiles y, por lo tanto, le permite centrarse en su trabajo real, que es proporcionar valor a sus grupos de interés.',
      'Deja en claro los riesgos que está asumiendo y le permite aumentar la probabilidad de éxito.'
    ],
    disadvantages: null,
    whoItWorks: 'El enfoque de DAD está en la entrega, aunque también se abordan'+
    ' cómo otros aspectos del ciclo de vida del sistema afectan el ciclo de vida de la entrega.'+
    ' El ciclo de vida completo del sistema / producto va desde la idea inicial del producto,'+
    ' hasta la entrega, las operaciones y el soporte, y muchas veces tiene muchas iteraciones'+
    ' del ciclo de vida de la entrega. El siguiente diagrama muestra una vista de alto nivel del'+
    ' ciclo de vida del sistema, que indica las tres fases que son el foco de DAD,'+
    ' así como las fases que son el foco de DevOps Disciplinado.'+
    ' La porción DAD es el ciclo de vida de tres fases (hasta) en el que se genera incrementalmente '+
     'una solución de consumo a lo largo del tiempo.',
    graph: './src/assets/img/dad.png',
    recommendedProjects: null,
    sources: [
      'http://www.disciplinedagiledelivery.com/introduction-to-dad/'
    ]
  };
}