import { Methodology } from '../interfaces/methodology';

export class ModeloVDelMinisterioAlemanDeLaDefensa {
  public static DATA: Methodology = {
    id: 'modelo-V-del-ministerio-aleman-de-la-defensa',
    name: 'Modelo V del ministerio alemán de la defensa',
    characteristics: [
      'Presenta equipos pequeños, de una a cinco personas.',
      'Todas las fases deben de encontrarse respaldadas por medio del uso de un documento y pruebas.',
      'Cada una de las fases efectuadas para llegar a la codificación del sistema, deben de tener su correspondiente etapa de ' +
      'verificación una vez terminada la codificación, dicha etapa de verificación estará tan alejada, en tiempo, de la codificación ' +
      'como la etapa original correspondiente.',
      'Comienza con las fases de la parte superior izquierda, llega a la codificación y continúa con las correspondientes ' +
      'verificaciones, terminando en la parte superior derecha del diagrama.'
    ],
    advantages: [
      'Minimizar los riesgos del proyecto.',
      'Mejorar y garantizar la calidad del proyecto.',
      'Reducir los costes totales a lo largo del ciclo de vida del proyecto.',
      'Mejorar la comunicación entre los accionistas.',
      'Identificación temprana de riesgos para así tener una mejor gestión del sistema.',
      'Asegura que el resultado obtenido tendrá la funcionalidad y calidad deseada, así como mejora la transparencia del ' +
      'proyecto y el control del mismo.'
    ],
    disadvantages: [
      'Cada fase tiene que estar respaldada por su documento correspondiente y test, se habla de una amplia documentación',
      'Debes realizar dos procesos al mismo tiempo.',
      'Es difícil que el cliente exponga explícitamente todos los requisitos.',
      'El cliente debe tener paciencia pues obtendrá el producto al final del ciclo de vida.',
      'Las pruebas pueden ser caras y, a veces, no lo suficientemente efectivas.',
      'El producto final obtenido puede que no refleje todos los requisitos del usuario.'
    ],
    whoItWorks: 'Describe métodos tanto para la gestión de un sistema como para su desarrollo, este método involucra la parte ' +
      'de que se ha hecho, además del cómo, cuándo y quien será el responsable de realizarlo. El proceso se realiza de forma secuencial ' +
      'hacia abajo y ejecuta una serie de pruebas por el lado derecho de la V para asegurar la calidad del software.',
    graph: 'assets/img/modelo-V-del-ministerio-aleman-de-la-defensa.png',
    recommendedProjects: 'Define un procedimiento para poder llevar a cabo el desarrollo de productos de software, dicho modelo es el ' +
      'usado para los proyectos de la Administración Federal Alemán y de defensa. es que presenta equipos pequeños, de una a cinco ' +
      'personas. El modelo presenta beneficios para proyectos que son pequeños, además de que, gracias a su claridad, permite ser usado ' +
      'por personas que nunca han programado siguiendo alguna metodología.',
    sources: [
      'http://www.iiia.csic.es/udt/es/blog/jrodriguez/2008/metodologia-desarrollo-sotware-modelo-en-v-o-cuatro-niveles'
    ]
  };
}
