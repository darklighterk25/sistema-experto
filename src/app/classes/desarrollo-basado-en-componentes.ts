import { Methodology } from '../interfaces/methodology';


export class DesarrolloBasadoEnComponentes {
    public static DATA: Methodology = {
        id: 'desarrollo-basado-en-componentes',
        name: 'Desarrollo basado en componenetes',
        characteristics: [
          'Exige una metodología de programación basada en desarrollo en componentes.',
          'Enfoque de desarrollo a partir de módulos que han sido prefabricados.',
          'Busca reducir los tiempos de desarrollo y de implementaciones, para poder reducir los costos del sistema.'
        ],
        advantages: [
          'Reutilización de software, lo cual ayuda a los desarrolladores en cuanto a la valoración del sistema que se está realizando.',
          'Ayuda a reducir el tiempo de desarrollo y el costo del sistema'
        ],
        disadvantages: [
          'La existencia de componentes reutilizables no garantiza que puedan ser integrados con facilidad o eficiencia a la ' +
          'arquitectura del sistema.',
          'Se tiene que tener confianza en el buen funcionamiento de los componentes',
          'En ocasiones los componentes son como una caja negra y el código no está disponible para el usuario.'
        ],
        whoItWorks: 'Este modelo tiene principios y practicas basadas en el modelo en espiral, además es de enfoque evolutivo e ' +
          'iterativo para el desarrollo de software; pero sin embargo, este modelo se encarga de construir software a partir de ' +
          'fragmentos de software prefabricados.',
        graph: 'assets/img/DesarrolloBComponentes.jpg',
        recommendedProjects: 'Un componente puede ser definido como una unidad independiente y reemplazable de cualquier sistema, además ' +
          'de proveer una parte de la funcionalidad del producto dentro de su arquitectura definida. Este tipo de modelo puede ser usado' +
          'en sistemas de gran complejidad o que tienen muchos requisitos.',
        sources: null
    };
}
