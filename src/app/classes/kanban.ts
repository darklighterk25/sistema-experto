import { Methodology } from '../interfaces/methodology';

export class Kanban {
  public static DATA: Methodology = {
    id: 'kanban',
    name: 'Kanban',
    characteristics: [
      'Visualice lo que hace (su flujo de trabajo): una visualización de todas sus tareas y elementos en una tabla contribuirá a que ' +
      'todos los miembros de su equipo se mantengan al corriente con su trabajo.',
      'Limite la cantidad de Trabajo en Proceso (límites del TEP): establezca metas asequibles. Mantenga el equilibrio de su flujo de ' +
      'trabajo mediante la limitación de los trabajos en proceso para prevenir el exceso de compromiso en la cantidad de tareas que ' +
      'será incapaz de terminar.',
      'Realice un seguimiento de su tiempo: El seguimiento del tiempo confluye con la metodologia Kanban. Realice un seguimiento de su ' +
      'tiempo de forma contínua y evalúe su trabajo con precisión.',
      'Lectura fácil de indicadores visuales: conozca lo que está ocurriendo de un solo vistazo. Utilice tarjetas de colores para ' +
      'distinguir los Tipos de trabajo, Prioridades, Etiquetas, Fechas límite y más.',
      'Identifique los cuellos de botella y elimine lo que resulta descartable: aproveche al máximo los plazos y ciclos de ejecución, ' +
      'del Flujo Acumulativo y de los informes de tiempo. Estos criterios le permitirán evaluar su rendimiento, detectar los problemas ' +
      'y ajustar el flujo de trabajo en consecuencia.'
    ],
    advantages: [
      'Estímulo del rendimiento. Análisis profundo y estimaciones que permiten medir su rendimiento. Detección de cualquier problema ' +
      'existente y ajuste del flujo de trabajo para ganar en eficiencia. El método Kanban es muy flexible y le permite perfeccionar ' +
      'sus procesos para obtener los mejores resultados.',
      'Organización y colaboración. La metodologia Kanban le permite beneficiarse del poder del enfoque visual, mediante el uso de ' +
      'columnas, carriles y tarjetas de colores. Usted será capaz de trabajar en el mismo tablero que su equipo y colaborar en tiempo ' +
      'real. Los tableros digitales Kanban le permitirán acceder a su flujo de trabajo desde cualquier sitio, compartir tareas con ' +
      'facilidad y comunicarse en su trabajo con sus colegas.',
      'Distribución del trabajo. Una cómoda visión general de los trabajos en curso y menos tiempo dedicado a la distribución y ' +
      'presentación de los trabajos. Las estimaciones son imperfectas, por consiguiente, un flujo constante de tareas reducirá su ' +
      'tiempo de espera y el tiempo dedicado a la asignación de tareas. Usted selecciona sus tareas, por tanto no tendrá que esperar a ' +
      'que la tarea vaya hacia usted.'
    ],
    disadvantages: [
      'Menor efectividad en situaciones de Recursos Compartidos: Las órdenes no frecuentes vuelven ineficientes a kanban ya que se ' +
      'tiene que asegurar una producción suficiente por parte de un proceso mientras que a su vez el proceso que es no-frecuente es ' +
      'ejecutado.',
      'Kanban asume sistemas de producción repetitivos dada la naturaleza de su creación en el área de manufactura.',
      'Posiblemente Kanban pueda arrojar productos de baja calidad que requieren de ser retrabajados. Kanban funciona a manera de ' +
      'semáforo para administrar el tráfico y así cumplir con las necesidades del cliente indicando cuando empezar, cuando bajar el ' +
      'ritmo y cuando parar. Cualquier variabilidad o evento no esperado puede afectar el funcionamiento del sistema provocando que se ' +
      'generen señales confusas.',
      'Calidad: El sistema Kanban lleva los niveles de inventario cerca de 0 lo que en caso de alta incertidumbre e interrupciones en ' +
      'la red de transporte representa un peligro ya que eso significa que los clientes se quedan sin suministro de partes.'
    ],
    whoItWorks: 'Kanban, representada por una tarjeta Kanban, se moverá a través de las diversas etapas de su trabajo hasta su ' +
      'finalización. A menudo se habla de él como un método de extracción, de forma que usted tira de sus tareas a través de su flujo ' +
      'de trabajo, ya que permite a los usuarios mover de sitio libremente las tareas en un entorno de trabajo basado en el equipo.',
    graph: './src/assets/img/kanban.png',
    recommendedProjects: 'Proyectos a pequeña escala de equipos pequeños que requieren cumplir con los requerimientos funcionales lo ' +
      'más pronto posible.',
    sources: [
      'https://kanbantool.com/es/metodologia-kanban'
    ]
  };
}
