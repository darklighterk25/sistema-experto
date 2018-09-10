import { Methodology } from '../interfaces/methodology';

export class AdaptiveSoftwareDevelopment {
  public static DATA: Methodology = {
    id: 'adaptive-software-development',
    name: 'Adaptive Software Development',
    characteristics: [
      'Iterativo.',
      'Orientado a los componentes de software más que a las tareas en las que se va a alcanzar dicho objetivo.',
      'Tercer característica',
      'Tolerante a los cambios.',
      'Guiado por los riesgos.',
      'La revisión de los componentes sirve para aprender de los errores y volver a iniciar el ciclo de desarrollo.'
    ],
    advantages: [
      'Sirve para aprender de los errores y volver a iniciar el ciclo de desarrollo.',
      'Utiliza información disponible acerca de cambios para mejorar el comportamiento del software.',
      'Promulga colaboración, la interacción de personas.'
    ],
    disadvantages: null,
    whoItWorks: 'Así funciona',
    graph: './src/assets/img/ads.png',
    recommendedProjects: 'Pequeños y medianos.',
    sources: [
      'https://es.wikiversity.org/wiki/Desarrollo_Adaptativo_de_Software',
      'https://issuu.com/cyber107/docs/metodologiaagilasd-100613135636-php'
    ]
  };
}
