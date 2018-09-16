import { Methodology } from '../interfaces/methodology';

export class DisenoPorPlanificacion {
  public static DATA: Methodology = {
    id: 'diseño-por-planificacion',
    name: 'Diseño por planificación',
    characteristics: [
      'Tiene un plazo de cumplimiento desde la planificación.',
      'Sigue las características de entrega por etapas.',
      'Cuenta con las características de hacer una división de funcionalidades del sistema en etapas, lo cual hace más ' +
      'manejable el desarrollo de cada una de ellas, además de priorizarlas para enfatizar en realizar las de más importancia.'
    ],
    advantages: [
      'Se enfoca en realizar primero las funcionales primordiales del sistema.',
      'Va incorporando aspectos pero de menor importancia hasta dejar en última instancia las funcionalidades menos ' +
      'relevantes para el sistema.',
      'Asegura que lo más importante se pueda desarrollar y en grado caso de no alcanzar a implementar todo el sistema, ' +
      'se tendrá la certeza de que eran los aspectos menos importantes del producto. '
    ],
    disadvantages: [
      'Si no se hizo una buena jerarquización de las etapas podrían quedar aspectos importantes sin desarrollar.',
      'Es casi seguro que no se va a alcanzar a entregar todo el sistema, por lo que se debe de tener mucho énfasis ' +
      'en la parte de jerarquización de las etapas.',
      'Si se tiene mucha confianza para que se puedan alcanzar los objetivos de la planificación, esta aproximación es ineficiente.'
    ],
    whoItWorks: 'Es similar al modelo de entrega por etapas, ya que se planifica el desarrollo del sistema a través ' +
      'de etapas sucesivas en las que se va incorporando funcionamiento al sistema en lugar de una sola entrega del ' +
      'sistema completo. La diferencia con el modelo de entrega por etapas se basa en que no se tiene sabe si se lograra ' +
      'entregar todas las etapas planificadas al principio del diseño del sistema, esto debido a que se tiene una fecha ' +
      'de entrega que no puede ser cambiada, por lo que el sistema se entregara hasta donde se haya logrado desarrollar.',
    graph: 'assets/img/diseño-por-planificacion.png',
    recommendedProjects: 'Puede ser utilizado como una estrategia válida en el desarrollo de proyectos para asegurar que ' +
      'se va a realizar la entrega de un producto en una fecha pactada, al tener una fecha inmovible de entrega, y asegurar ' +
      'que se entreguen las funcionalidades más importantes. Por lo que este tipo de modelo es útil cuando no se tiene certeza ' +
      'si se va a alcanzar a cumplir con toda la planificación del proyecto pues, si se tiene certeza de que si serán alcanzables ' +
      'todas las funcionalidades del sistema con respecto a la fecha de entrega, este modelo resulta ineficiente.',
    sources: [
      'McConnel, S.. (1997). Desarrollo y gestión de proyectos informáticos. España: McGraw-Hill.'
    ]
  };
}
