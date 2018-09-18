import { Methodology } from '../interfaces/methodology';

export class StageDeliveryModel {
    public static DATA: Methodology = {
        id: 'stage-delivery-model',
        name: 'Stage Delivery Model',
        characteristics: [
          'Se pueden desarrollar varias etapas en paralelo.',
          'El sistema se muesetra al cliente en etapas refinadas sucesivamente.',
          'El sistema se entrega por etapas sucesivas a lo largo del proyecto.'
        ],
        advantages: [
          'Permite proporcionar una funcionalidad útil en manos del cliente sin tener la aplicación finalizada.',
          'Proporciona signos tangibles de progreso.',
          'Requiere poca sofisticación para los directivos y desarrolladores.',
          'Permite modificarse a medio camino.',
          'Requiere poco tiempo de gestion.',
          'Genera un sistema altamente fiable y con amplio desarrollo.'
        ],
        disadvantages: [
          'Está sometido a una planificación predeterminada.',
          'Trabaja con poca comprensión sobre la arquitectura.',
          'Trabaja con poca identificación de los requerimientos de diseño.'
        ],
        whoItWorks: 'El modelo de desarrollo de software por etapas es similar al modelo de prototipos ya ' +
        'que se muestra al cliente el software en diferentes estados sucesivos de desarrollo, se ' +
        'diferencica en que las especificaciones no son conocidas en detalle al inicio del proyecto y por ' +
        'tanto se van desarrollando simultáneamente con las diferentes versiones del código.',
        graph: 'assets/img/stagedelivery.png',
        recommendedProjects: 'Proyectos en los que el problema principal se puede descomponer en problemas más pequeños.',
        sources: null
      };
}
