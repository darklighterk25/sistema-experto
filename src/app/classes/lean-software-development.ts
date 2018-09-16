import { Methodology } from '../interfaces/methodology';

export class LeanSoftDev {
  public static DATA: Methodology = {
    id: 'Lean Software Development',
    name: 'Lean Software Development',
    characteristics: [
        'Eliminar desperdicios ',
        'Amplificar el aprendizaje ',
        'Decidir lo más tarde posible ',
        'Entrega lo más rápido posible ',
        'Capacitar, potenciar, al equipo ',
        'Construir con integridad ',
        'Ver el todo '
    ],
    advantages: [
        'la eficiencia global del proceso de desarrollo',
        'reduce el tiempo y el costo del proyecto',
        'La entrega del producto temprana ',
        'El empoderamiento del equipo de desarrollo'
        
    ],
    disadvantages: [
      'El proyecto depende en gran medida la cohesión del equipo y los compromisos individuales de los miembros del equipo. ',
      'El éxito del proyecto depende de la disciplina de los miembros del equipo son y cómo son excepcionales sus habilidades técnicas.',
      'Los patrocinadores del proyecto y los clientes necesitan saber lo que quieren y tomar las decisiones pertinentes. ',
      'El papel de un analista de negocios es de vital importancia para garantizar la documentación de los requerimientos del negocio (BRD) se entiende correctamente. Si usted no tiene una persona con las habilidades correctas analista de negocios, entonces rápidamente podría encontrar esta convertido en una de las causas de la corrupción del alcance.',
      'En magra que permite la especificación de requisitos software (SRS) para evolucionar. Sin embargo, esto causa problemas de su propia. La flexibilidad es grande, pero demasiado pronto dará lugar a un desarrollo que pierde de vista su objetivo original y que nunca termina.'
    ],
    whoItWorks: 'La metodología de desarrollo de software lean (traducción aproximada de lean: «fino» o «esbelto») es una traducción de los principios y las prácticas de la forma de producir lean, hacia el área del desarrollo de software. Inicialmente, originado en el Sistema de Producción de Toyota y ahora, apoyado por una corriente que está surgiendo desde la comunidad Ágil. Este método ofrece todo un marco teórico sólido y basado en la experiencia, para las prácticas ágiles de gestión.',
    recommendedProjects: null,
    graph: './src/assets/img/lsd.gif',
    sources: [
      'http://www.scrummanager.net/bok/index.php/Lean_Software_Development'
    ]
  };
}
