import { Methodology } from '../interfaces/methodology';

export class SoftwareComercialExistente {
    public static DATA: Methodology = {
        id: 'software-comercial-existente',
        name: 'Software comercial ecistente',
        characteristics: [
          'Pueden ser adquiridos de manera sencilla, que presentan buena calidad pero tienen un costo muy elevado,',
          'Se manejan por licencia de propietario y tienen restricciones de uso que se definen cuando se adquiere la licencia.'
        ],
        advantages: [
          'Si se compara el desarrollo de software tradicional con un desarrollo CBS, el segundo promete entregas más rápidas con ' +
          'menores costos de recursos, además de que es más sencillo de adquirir, por ejemplo en tiendas comerciales de tecnología.',
          'Otra ventaja que se tiene es que el hecho de tener una licencia por el software comercial adquirido nos permite tener ' +
          'soporte técnico para resolver problemas que se tengan.'
        ],
        disadvantages: [
          'Una vez que se adquiere una versión de un software comercial, no quiere decir que se han adquirido todas sus versiones, ' +
          'sino una de ellas, por lo que si se quiere adquirir alguna otra será necesario comprarla también.',
          'Otro aspecto negativo es que no se puede copiar o compartir la licencia que se adquirió, pues si se hace sería ilegal.'
        ],
        whoItWorks: 'Un producto COTS está definido como una unidad independiente que provee un conjunto de funciones relacionadas y es ' +
          'adecuado para reusarlo. Este tipo de productos son cosas que pueden ser compradas, listas para usarse,que son adquiridas ' +
          'desde el estante de una tienda virtual de algún fabricante, además deberán de estar disponibles a un costo razonable. ' +
          'Algunos ejemplos de este tipo de productos son sistemas de correo o de mensajes.',
        graph: 'assets/img/CO.jpg',
        recommendedProjects: 'un software comercial para un servidor y este pueda soportar mil usuarios, si se requiere que ahora ' +
          'soporte dos mil usuarios será necesario pagar por ese incremento pues con la licencia actual no se permitirán más de los mil ' +
          'acordados.',
        sources: [
          'S. A.. (1990). An Operational Specification Model for Process Control Software. '
        ]
    };
}
