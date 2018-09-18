import { Methodology } from '../interfaces/methodology';
export class AnalisisYDiseñoOrientadoAObjetos {
  public static DATA: Methodology = {
    id: 'analisis-y-diseno-orientado-a-objetos',
    name: 'Analisis y Diseño Orientado a Objetos',
    characteristics: [
      'Este tipo de desarrollo utiliza algunos términos como clase, la cual se representa una entidad que tiene un estado interno ' +
      '(atributos) y un comportamiento (métodos) y un objeto, cada instancia tiene características propias de acuerdo a los valores de' +
      'sus atributos',
      'Su métodos responderán o actuaran de acuerdo a la identidad que tenga la instancia.'
    ],
    advantages: [
      'Más fácil de mantener debido a que su estructura no se encuentra muy acoplada, por lo que este tipo de sistemas son más fáciles ' +
      'de adaptar y permiten la escalabilidad.',
      'Proporciona mejoras y metodologías para construir sistemas muy complejos a partir de unidades de software, no dejando de lado que ' +
      'puede ser utilizado y manejable para sistemas tanto pequeños como grandes.'
    ],
    disadvantages: [
      'No se enfoca a modelar procesos de negocio como tal, que es lo que necesitan los expertos en negocios, por lo que el enfoque ' +
      'orientado a objetos puede contradecir el enfoque orientado al negocio.'
    ],
    whoItWorks: 'El análisis y diseño orientado a objetos son un conjunto de técnicas que desarrollan y modelan un sistema de software ' +
      'a través de la formación de sus componentes, se modela el sistema como un conjunto de objetos que interactúan entre sí. Cabe ' +
      'mencionar que este tipo de desarrollo utiliza algunos términos como clase, la cual se representa una entidad que tiene un estado ' +
      'interno (atributos) y un comportamiento (métodos) y un objeto, el cual es cada una de las instancias de una clase, cada instancia ' +
      'tiene características propias de acuerdo a los valores de sus atributos y su métodos responderán o actuaran de acuerdo a la ' +
      'identidad que tenga la instancia',
    graph: 'assets/img/OOAD.jpg',
    recommendedProjects: ' Este tipo de modelo es válido para sistemas basados en desarrollo orientado a objetos. Cabe resaltar que los ' +
      'desarrollos estructurados también utilizan con un modelo similar pero presentan mucha distancia entre las fases de análisis y ' +
      'diseño, a lo cual se le llama gap semántico, lo cual intenta eliminar el desarrollo orientado a objetos, al reducir las distancias' +
      'entre las diferentes fases.',
    sources: null
  };
}
