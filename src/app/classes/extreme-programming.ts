import { Methodology } from '../interfaces/methodology';

export class ExtremeProgramming {
  public static DATA: Methodology = {
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
  };
}
