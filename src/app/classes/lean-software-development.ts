import { Methodology } from '../interfaces/methodology';

export class LeanSoftDev {
  public static DATA: Methodology = {
    id: 'lsd',
    name: 'lsd',
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
    disadvantages: null,
    whoItWorks: 'No existe un único proceso de Lean Software Development.'+
    'Se puede decir que un proceso es Lean si se corresponden claramente con los valores'+
    ' y los principios de Lean Software Development. Lean Software Development no recomienda'+
    ' ningún procedimiento, pero algunas actividades se han convertido en habituales.'+
    ' Las organizaciones que trabajan con Lean tratan de fomentar el kaizen a través de'+
    ' la visualización del flujo de trabajo y de los trabajos en curso y a través de una'+
    ' comprensión de la dinámica de flujo y de factores (como cuellos de botella,'+
    ' disponibilidad no inmediata y desechos) que le afectan. Las mejoras en el'+
    ' proceso se sugieren y se justifican como una forma de reducir las fuentes'+
    ' de variabilidad, eliminar desechos, mejorar los flujos o mejorar la entrega'+
    ' de valor o la administración de riesgos. Como tal, los procesos de Lean Software'+
    ' Development evolucionarán siempre y estarán individualizados de forma única para'+
    ' la organización dentro en la que se desarrollan. No se puede copiar una definición'+
    ' de proceso desde una organización a otra y pretender que funcione en un contexto diferente.'+
    ' También es improbable que si se regresa a una organización después de unas semanas o meses,'+
    ' el proceso en uso sea igual al anteriormente observado. Evolucionará siempre.',
    recommendedProjects: null,
    graph: './src/assets/img/lsd.png',
    sources: [
      'https://kanbantool.com/es/metodologia-kanban'
    ]
  };
}
