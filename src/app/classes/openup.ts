import { Methodology } from '../interfaces/methodology';

export class Openup {
  public static DATA: Methodology = {
    id: 'openup',
    name: 'openup',
    characteristics: [
      'Desarrollo incremental.',
      'Uso de casos de uso y escenarios.',
      'Manejo de riesgos.',
      'Diseño basado en la arquitectura.',
    ],
    advantages: [
      'Ya que es apropiado para proyectos pequeños y de bajos recursos permite disminuir las probabilidades de fracaso en los proyectos pequeños e incrementar las probabilidades de éxito.',
      'Permite detectar errores tempranos a través de un ciclo iterativo.',
      'Evita la elaboración de documentación, diagramas e iteraciones innecesarios requeridos en la metodología RUP.',
      'Por ser una metodología ágil tiene un enfoque centrado al cliente y con iteraciones cortas.'
    ],
    disadvantages: null,
    whoItWorks: 'OpenUP es un proceso de desarrollo de software mínimamente suficiente,'+
    ' esto quiere decir que incluye solo el contenido fundamental, esto es que no provee '+
    'orientación sobre temas en los que el proyecto tiene que lidiar, como son: el tamaño del equipo,'+
    ' el cumplimiento, seguridad, orientación tecnológica entre otras.'+
    ' Sin embargo, OpenUP es completa en el sentido de que manifiesta por completo'+
    ' el proceso de construir un sistema. Para atender las necesidades que no están '+
    'cubiertas en su contenido OpenUp es extensible a ser utilizado como base sobre '+
    'la cual se pueden añadir o adaptarse a contenido de otro proceso que sea necesario.',
    graph: './src/assets/img/openup.png',
    recommendedProjects: null,
    sources: [
      'https://www.eclipse.org/epf/general/OpenUP.pdf'
    ]
  };
}