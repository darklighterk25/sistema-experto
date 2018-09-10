import { Injectable } from '@angular/core';
import { Methodology } from '../interfaces/methodology';

@Injectable({
  providedIn: 'root'
})
export class MethodologiesService {

  private methodologies: Methodology[] = [
    {
      id: 'extreme-programming',
      name: 'Extreme Programming',
      characteristics: [
        'Desarrollo iterativo e incremental: pequeñas mejoras, unas tras otras.',
        'Pruebas unitarias continuas, frecuentemente repetidas y automatizadas, incluyendo pruebas de regresión. Se aconseja escribir el ' +
        'código de la prueba antes de la codificación. Véase, por ejemplo, las herramientas de prueba JUnit orientada a Java, DUnit' +
        'orientada a Delphi, NUnit para la plataforma.NET o PHPUnit para PHP. Estas tres últimas inspiradas en JUnit, la cual, a su vez, ' +
        'se insipiró en SUnit, el primer framework orientado a realizar tests, realizado para el lenguaje de programación Smalltalk.',
        'Programación en parejas: se recomienda que las tareas de desarrollo se lleven a cabo por dos personas en un mismo puesto. La ' +
        'mayor calidad del código escrito de esta manera -el código es revisado y discutido mientras se escribe- es más importante que ' +
        'la posible pérdida de productividad inmediata.',
        'Frecuente integración del equipo de programación con el cliente o usuario. Se recomienda que un representante del cliente ' +
        'trabaje junto al equipo de desarrollo.',
        'Corrección de todos los errores antes de añadir nueva funcionalidad. Hacer entregas frecuentes.',
        'Refactorización del código, es decir, reescribir ciertas partes del código para aumentar su legibilidad y mantenibilidad pero ' +
        'sin modificar su comportamiento. Las pruebas han de garantizar que en la refactorización no se ha introducido ningún fallo.',
        'Propiedad del código compartida: en vez de dividir la responsabilidad en el desarrollo de cada módulo en grupos de trabajo ' +
        'distintos, este método promueve el que todo el personal pueda corregir y extender cualquier parte del proyecto. Las frecuentes ' +
        'pruebas de regresión garantizan que los posibles errores serán detectados.',
        'Simplicidad en el código: es la mejor manera de que las cosas funcionen. Cuando todo funcione se podrá añadir funcionalidad si ' +
        'es necesario. La programación extrema apuesta que es más sencillo hacer algo simple y tener un poco de trabajo extra para ' +
        'cambiarlo si se requiere, que realizar algo complicado y quizás nunca utilizarlo.'
      ],
      advantages: [
        'Se adapta al desarrollo de sistemas pequeños y grandes.',
        'Optimiza el tiempo de desarrollo.',
        'Permite realizar el desarrollo del sistema en parejas para complementar los conocimientos.',
        'El código es sencillo y entendible.',
        'Poca documentación a elaborar para el desarrollo del sistema.'
      ],
      disadvantages: null,
      whoItWorks: 'La programación extrema, o Extreme Programming (XP), es una metodología de desarrollo ágil, una de las más exitosas ' +
        'en tiempo reciente. Su autor principal es Kent Beck, quien eligió algunas características de otras metodologías y las relacionó ' +
        'de forma que cada una complementara a la otra.\n' +
        'Así, la XP se puede definir como un conjunto de pasos de diversas metodologías, acopladas de manera que sean pasos flexibles a ' +
        'seguir utilizadas con el uso común, para realizar un desarrollo más agradable y sencillo.\n' +
        'Esta metodología tiene como base la simplicidad y como objetivo principal la satisfacción del cliente; para lograrlo se deben ' +
        'tomar en cuenta cuatro valores fundamentales:\n' +
        '\n' +
        'Comunicación\n' +
        'Es muy importante que haya una comunicación constante con el cliente y dentro de todo el equipo de trabajo, de esto dependerá ' +
        'que el desarrollo se lleve a cabo de una manera sencilla, entendible y que se entregue al cliente lo que necesita.\n' +
        '\n' +
        'Simplicidad\n' +
        'En la XP se refiere que ante todo y sin importar qué funcionalidad requiera el usuario en su sistema, éste debe ser fácil. El ' +
        'diseño debe ser sencillo y amigable al usuario, el código debe ser simple y entendible, programando sólo lo necesario y lo que ' +
        'se utilizará.\n' +
        '\n' +
        'Retroalimentación\n' +
        'Es la comunicación constante entre el desarrollador y el usuario.\n' +
        '\n' +
        'Coraje\n' +
        'Se refiere a la valentía que se debe tener al modificar o eliminar el código que se realizó con tanto esfuerzo; el ' +
        'desarrollador debe saber cuando el código que desarrolló no es útil en el sistema y, por lo mismo, debe ser eliminado. También ' +
        'se refiere a tener la persistencia para resolver los errores en la programación.\n' +
        '\n' +
        'Dentro de la programación extrema se tiene 12 principios que llevan o guían el desarrollo con esta metodología:\n' +
        '1. El principio de pruebas\n' +
        '2. Proceso de planificación\n' +
        '3. El cliente en el lugar\n' +
        '4. Programación en parejas\n' +
        '5. Integración continua\n' +
        '6. Refactorización\n' +
        '7. Entregas pequeñas\n' +
        '8. Diseño simple\n' +
        '9. Metáfora\n' +
        '10. Propiedad colectiva del código\n' +
        '11. Estándar de codificación\n' +
        '12. La semana de 40 horas',
      graph: './src/assets/img/xp.png',
      recommendedProjects: null,
      sources: [
        'Beck, K. A. (2004). Extreme Programming Explained. Addison Wesley.',
        'Martin, R., & Newkirk, J. (2002). La programación extrema en la práctica. Pearson Addison-Wesley.'
      ]
    },
    {
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
    },
    {
      id: 'dynamic-systems-development-method',
      name: 'Dynamic Systems Development Method',
      characteristics: [
        'Busca involucrar al cliente es la clave para llevar un proyecto eficiente y efectivo.',
        'El equipo del proyecto debe tener el poder para tomar decisiones que son importantes.',
        'DSDM se centra en la entrega frecuente de productos.',
        'El desarrollo es iterativo e incremental.',
        'Todos los cambios durante el desarrollo son reversibles.',
        'Las pruebas son realizadas durante todo el ciclo vital del proyecto.',
        'La comunicación y cooperación entre todas las partes interesadas.'
      ],
      advantages: [
        'La calidad del producto es mejorada a través de la participación de los usuarios a lo largo del ciclo de vida del proyecto y la ' +
        'naturaleza iterativa del desarrollo.',
        'DSDM asegura desarrollos rápidos.',
        'Reduce los costos de proyectos a través de las ventajas mencionadas anteriormente.',
        'Permite realizar cambios de forma fácil.',
        'Permite la reutilización de aplicación a través de los módulos existentes.'
      ],
      disadvantages: null,
      whoItWorks: 'El marco DSDM consta de tres fases sucesivas, a saber, el pre-proyecto, el ciclo de vida del proyecto y las fases ' +
        'posteriores a los proyectos. La fase del proyecto de DSDM es el más elaborado de las tres fases. La fase del proyecto del ciclo ' +
        'de vida consiste en 5 etapas que forman un método iterativo, paso a paso en el desarrollo de un SI. Las tres fases y etapas ' +
        'correspondientes se explican ampliamente a continuación.\n' +
        '\n' +
        'Fase 1 - El pre-proyecto: En el anteproyecto fase de proyectos candidatos se identifican, la financiación de proyectos se ' +
        'realiza y el compromiso del proyecto está asegurado. El manejo de estas cuestiones en una fase temprana evita problemas en las ' +
        'etapas posteriores del proyecto.\n' +
        '\n' +
        'Fase 2 - El ciclo vital del proyecto: Representa 5 etapas de un proyecto que tendrá que pasar por la creación de un SI. Las dos ' +
        'primeras etapas son, el estudio de viabilidad y estudio de negocios son las fases secuenciales que se complementan el uno al ' +
        'otro. Después de estas fases, el sistema se desarrolla iterativo e incremental en la iteración del modelo funcional, diseño y ' +
        'construcción de iteración y etapas de ejecución.\n' +
        'Los cinco pasos de la DSDM proyecto del ciclo de vida: estudio de viabilidad (factibilidad), estudio de negocios, modelo de ' +
        'iteración funcional, diseño y construcción de iteración y la implementación.\n' +
        '\n' +
        'Fase 3 - Después del proyecto \n' +
        'La fase posterior al proyecto asegura que el sistema funcione de manera eficaz y eficiente. Esto se realiza por el ' +
        'mantenimiento, mejoras y correcciones de acuerdo a los principios de DSDM. El mantenimiento puede ser visto como desarrollo ' +
        'continuo basado en el carácter iterativo e incremental de DSDM. En lugar de terminar el proyecto en un ciclo por lo general el ' +
        'proyecto puede volver a las fases o etapas previas para que el paso anterior y los productos a entregar se puedan refinar.',
      graph: './src/assets/img/dsdm.png',
      recommendedProjects: 'Proyectos grandes.',
      sources: [
        'https://sites.google.com/site/utmfci/home/funcionamiento'
      ]
    },
    {
      id: 'crystal-clear-methods',
      name: 'Crystal Clear Methods',
      characteristics: [
        'Entrega frecuente. Consiste en entregar software a los clientes con frecuencia, no solamente compilar el código. La frecuencia ' +
        'dependerá del proyecto, pero puede ser diaria, semanal o  mensual.',
        'Comunicación osmótica. Todos juntos en el mismo cuarto. Una variante especial es disponer en la  sala de un experto diseñador ' +
        'senior y discutir respecto del tema que se trate.',
        'Mejora reﬂexiva. Tomarse un pequeño tiempo (unas pocas horas cada o una vez al mes) para pensar bien qué se está haciendo, ' +
        'cotejar notas, reﬂexionar, discutir.',
        'Seguridad personal. Hablar con los compañeros cuando algo molesta dentro del grupo.',
        'Foco. Saber lo que se está haciendo y tener la tranquilidad y el tiempo para hacerlo.',
        'Fácil acceso a usuarios expertos. Tener alguna comunicación con expertos desarrolladores.'
      ],
      advantages: [
        'Primer ventaja',
        'Segunda ventaja',
        'Tercer ventaja'
      ],
      disadvantages: null,
      whoItWorks: 'Crystal es una metodología de desarrollo de Software ágil, que en realidad está considerada como una “familia de ' +
        'metodologías” debido a que se subdivide en varios tipos de metodologías en función a la cantidad de personas que vayan a ' +
        'conformar el proyecto. Creada por Alistair Cockburn.\n' +
        '\n' +
        'Crystal Clear es una familia de metodologías con un “código genético” común.\n' +
        '\n' +
        'El nombre Crystal deriva de la caracterización de los proyectos según 2 dimensiones, tamaño y complejidad. Por ejemplo:\n' +
        '\n' +
        'Clear es para equipos de hasta 6 personas o menos.\n' +
        'Amarillo para equipos entre 7 a 20 personas.\n' +
        'Naranja para equipos entre 21 a 40 personas.\n' +
        'Roja  para equipos entre 41 a 80 personas.\n' +
        'Marron para equipos entre 81 a 200 personas.\n' +
        'CC puede ser usado en proyectos pequeños y como casi todos los otros métodos, CC consiste en valores, técnicas y procesos.\n' +
        '\n' +
        'En primera instancia se especiﬁcan los antecedentes de la metodología, continuando con deﬁniciones que ayudan a estructurar la ' +
        'fundamentación teórica y se termina con las características esenciales de los diferentes tipos de Crystal.\n' +
        '\n' +
        'Crystal da vital importancia a las personas que componen el equipo de un proyecto, y por tanto sus puntos de estudio son:\n' +
        '\n' +
        '* Aspecto humano del equipo\n' +
        '* Tamaño de un equipo (número de componentes)\n' +
        '* Comunicación entre los componentes\n' +
        '* Distintas políticas a seguir\n' +
        '* Espacio físico de trabajo',
      graph: './src/assets/img/ccm.png',
      recommendedProjects: 'Proyectos pequeños',
      sources: [
        'https://folderit.net/itech/desarrollo-agil-de-software-crystal-clear/'
      ]
    },
    {
      id: 'feature-driven-development',
      name: 'Feature Driven Development',
      characteristics: [
        'Se preocupa por la calidad, por lo que incluye un monitoreo constante del proyecto.',
        'Ayuda a contrarrestar situaciones como el exceso en el presupuesto, fallas en el programa o el hecho de entregar menos de lo ' +
        'deseado.',
        'Propone tener etapas de cierre cada dos semanas. Se obtienen resultados periódicos y tangibles.',
        'Se basa en un proceso iterativo con iteraciones cortas que producen un software funcional que el cliente y la dirección de la ' +
        'empresa pueden ver y monitoriar.',
        'Define claramente entregas tangibles y formas de evaluación del progreso del proyecto.',
        'No hace énfasis en la obtención de los requerimientos sino en como se realizan las fases de diseño y construcción.'
      ],
      advantages: [
        'El equipo de desarrollo no malgasta el tiempo y dinero del cliente desarrollando soluciones innecesariamente generales y ' +
        'complejas que en realidad no son un requisito del cliente.',
        'Cada componente del producto final ha sido probado y satisface los requerimientos.\n',
        'Rápida respuesta a cambios de requisitos a lo largo del desarrollo.',
        'Entrega continua y en plazos cortos de software funcional.',
        'Trabajo conjunto entre el cliente y el equipo de desarrollo.',
        'Minimiza los costos frente a cambios.',
        'Importancia de la simplicidad, al eliminar el trabajo innecesario.',
        'Atención continua a la excelencia técnica y al buen diseño.',
        'Mejora continua de los procesos y el equipo de desarrollo.',
        ' Evita malentendidos de requerimientos entre el cliente y el equipo.'
      ],
      disadvantages: null,
      whoItWorks: 'Es una metodología ágil diseñada para el desarrollo de software, basada en la calidad y el monitoreo constante del ' +
        'proyecto. Fue desarrollada por Jeff De Luca y Peter Coad a mediados de los años 90. Esta metodología se enfoca en iteraciones ' +
        'cortas, que permiten entregas tangibles del producto en un periodo corto de tiempo, de como máximo dos semanas.\n' +
        '\n' +
        'Al inicio del desarrollo se construye un modelo teniendo en cuenta la visión, el contexto y los requisitos que debe tener el ' +
        'sistema a construir. Este modelo se divide en áreas que se analizan detalladamente. ' +
        'Se construye un diagrama de clases por cada área.\n' +
        '\n' +
        'Se elabora una lista que resuma las funcionalidades que debe tener el sistema, cuya lista es evaluada por el cliente. Cada ' +
        'funcionalidad de la lista se divide en funcionalidades más pequeñas para un mejor entendimiento del sistema.\n' +
        '\n' +
        'Se procede a ordenar los conjuntos de funcionalidades conforme a su prioridad y dependencia, y se asigna a los programadores ' +
        'jefes.\n' +
        '\n' +
        'Se selecciona un conjunto de funcionalidades de la lista. Se procede a diseñar y construir la funcionalidad mediante un proceso ' +
        'iterativo, decidiendo que funcionalidad se van a realizar en cada iteración. Este proceso iterativo incluye inspección de ' +
        'diseño, codificación, pruebas unitarias, integración e inspección de código.\n' +
        '\n' +
        'Y para concluir, se procede a la construcción total del proyecto.'
      ,
      graph: './src/assets/img/fdd.png',
      recommendedProjects: 'Proyectos pequeños con requisitos cambiantes.',
      sources: [
        'http://metodologiafdd.blogspot.com/'
      ]
    },
    {
      id: 'agile-modeling',
      name: 'Agile Modeling',
      characteristics: [
        'Asumir simplicidad.',
        'Bienvenido el cambio.',
        'Permitir el siguiente esfuerzo es el objetivo secundario.',
        'Cambio incremental.',
        'Maximizar la inversión de las partes interesadas en el proyecto.',
        'Modelar con un propósito.',
        'Múltiples modelos.',
        'Trabajo de calidad.',
        'Rápida retroalimentación.',
        'El software es el objetivo primario.',
        'Viaje con poco equipaje.'
      ],
      advantages: [
        'Ágil ofrece un modelo increíblemente flexible, que permite adaptarse evolutivamente a las necesidades de un mundo cambiante. El ' +
        'proyecto se divide en pequeñas tareas desarrolladas por grupos independientes que trabajan simultáneamente e interaccionan ' +
        'entre ellos. Los clientes intervienen y las pruebas del producto ocurren simultáneamente a la realización del proyecto, con lo ' +
        'cual se consigue una mejora continua y una adecuación constante del producto a las necesidades reales.',
        'La metodología Ágil es especialmente útil cuando el objetivo del proyecto no está claramente definido o cuando el cliente no ' +
        'conoce cuáles son exactamente sus necesidades. El feedback mutuo entre el equipo del proyecto y los clientes, conseguirá que ' +
        'progresivamente los objetivos del cliente y el producto facilitado por el equipo vayan convergiendo hacia un mismo punto, ' +
        'consiguiendo un resultado satisfactorio.',
        'En estas metodologías la comunicación cobra un papel fundamental, tanto entre los miembros del equipo, entre los diferentes ' +
        'equipos que se reparten las tareas de un proyecto, y entre todos estos y los clientes.',
        'La comunicación integra los procesos de desarrollo, consigue la cohesión entre el personal y los clientes y garantiza la ' +
        'coherencia del resultado del proyecto con los objetivos que se van planteando de manera dinámica.'
      ],
      disadvantages: null,
      whoItWorks: 'El Modelado Ágil es una metodología basada en la práctica para modelado efectivo de sistemas de software. La ' +
        'metodología AM es una colección de prácticas, guiadas por principios y valores que pueden ser aplicados por profesionales de ' +
        'software en el día a día. AM no es un proceso prescriptivo, ni define procedimientos detallados de como crear un tipo de modelo ' +
        'dado. En lugar de eso, sugiere prácticas para ser un modelador efectivo. Es "suave al tacto", no es duro y es rápido -- piense ' +
        'en AM como un arte, no una ciencia.',
      graph: './src/assets/img/am.png',
      recommendedProjects: null,
      sources: [
        'http://agilemodeling.com/shared/AMPamphletSpanish.pdf',
        'http://www.itmplatform.com/es/blog/ventajas-e-inconvenientes-de-metodologias-agil-y-predictiva/'
      ]
    },
    {
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
      disadvantages: null,
      whoItWorks: 'Kanban, representada por una tarjeta Kanban, se moverá a través de las diversas etapas de su trabajo hasta su ' +
        'finalización. A menudo se habla de él como un método de extracción, de forma que usted tira de sus tareas a través de su flujo ' +
        'de trabajo, ya que permite a los usuarios mover de sitio libremente las tareas en un entorno de trabajo basado en el equipo.',
      graph: './src/assets/img/kanban.png',
      recommendedProjects: null,
      sources: [
        'https://kanbantool.com/es/metodologia-kanban'
      ]
    },
  ];

  constructor() {
  }
  getMethodologies(): Methodology[] {
    return this.methodologies;
  }
  getMethodology( id: string ): Methodology {
    for (let i = 0; i < this.methodologies.length; i++) {
      console.log('le llegó ' + id);
      if (this.methodologies[i].id === id) {
        console.log('y lo encontró!');
        return this.methodologies[i];
      }
    }
    return {
      id: 'prueba',
      name: 'Metodología',
      characteristics: [
        'Primer característica',
        'Segunda característica',
        'Tercer característica'
      ],
      advantages: [
        'Primer ventaja',
        'Segunda ventaja',
        'Tercer ventaja'
      ],
      disadvantages: null,
      whoItWorks: 'Así funciona',
      graph: 'http://placehold.it/250x250',
      recommendedProjects: 'Proyectos...',
      sources: [
        'wikipedia.org'
      ]
    };
  }
}
