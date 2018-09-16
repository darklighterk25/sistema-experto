import { Methodology } from '../interfaces/methodology';

export class Prototipado {
  public static DATA: Methodology = {
    id: 'prototipado',
    name: 'Prototipado',
    characteristics: [
      'Se basa este modelo es ir generando prototipos del sistema para que el usuario las analice y las pruebe, conforme ' +
      'a eso él va a ir teniendo idea de nuevos requerimientos y va a identificar las áreas fuertes y débiles del sistema, ' +
      'entonces podría sugerir nuevos requerimientos de sistema.',
      'Es posible identificar errores y omisiones en los requerimientos que fueron propuestos.',
      'Las especificaciones del sistema podrían ser cambiadas para que puedan ser reflejadas en el sistema de manera adecuada.',
      'Permite al usuario ir visualizando como el sistema está trabajando conforme el desarrollo del mismo.'
    ],
    advantages: [
      'Gracias al desarrollo de prototipos se puede tener un control de los costos y los interesados en el sistema podrán ' +
      'experimentar con los prototipos del sistema durante el desarrollo del mismo, sin importar que a un no se tenga un producto final.',
      'Ayuda a los desarrolladores a hacer la validación de los requerimientos del sistema, pues en ocasiones no son muy claros y ' +
      'gracias al uso de los prototipos, los usuarios pueden dar su retroalimentación para mejorar el desarrollo.',
      'Permite que se puedan explorar soluciones de software y para darle soporte al diseño de la interfaz.'
    ],
    disadvantages: [
      'No necesariamente los prototipos serán usados tal cual será usado el sistema final, pues no siempre las pruebas sobre los ' +
      'prototipos las hacen los usuarios del sistema, es por eso que el entrenamiento durante el prototipado para los usuarios no es ' +
      'suficiente.',
      'Como los prototipos cambian rápidamente no existe documentación alguna más que el código fuente, lo que evita que sea escalable ' +
      'y fácil de mantener.',
      'Las modificaciones en los prototipos  pudieron degradar la estructura del sistema, por lo que este será difícil y costoso de ' +
      'mantener.',
      'Los estándares de calidad normalmente son relajados para este modelo.'
    ],
    whoItWorks: 'Consiste en la generación de prototipos del producto final que hará visible los aspectos del producto al cliente. ' +
      'Es entonces que el cliente evalúa el prototipo que se le presenta y da su retroalimentación al equipo de desarrollo; dicho ' +
      'equipo genera una planificación y diseño de una nueva iteración para generar un nuevo prototipo. Esto se repite hasta que ' +
      'se cumplan todos los requisitos del sistema correctamente..',
    graph: 'assets/img/prototipado.png',
    recommendedProjects: 'Puede utilizarse para proyectos en donde no se conocen del todo los requerimientos del sistema a realizar ' +
      'o no está clara alguna funcionalidad, por lo que se hace necesaria la creación de distintos prototipos para presentarlos y ' +
      'conseguir la conformidad del cliente.',
    sources: [
      'Sommerville, Ian.. (2011). SOFTWARE ENGINEERING, Novena edición. Estados Unidos: Pearson Education.'
    ]
  };
}
