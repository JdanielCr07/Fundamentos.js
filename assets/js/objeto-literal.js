
let personaje = {
    nombre: 'tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    ultima_pelicula: 'Infiny war'
};

// console.log(personaje);
// console.log('Nombre:', personaje.nombre);//Dos formas de obetener el valor
// console.log('Nombre:', personaje['nombre']);

// console.log('edad:', personaje.edad);
// console.log('edad:', personaje['edad']);

// console.log('lat:', personaje.coords.lat);
// console.log('lat:', personaje['coords']['lat']);

// console.log('Nro. Trajes:', personaje.trajes.length);
// console.log('Ultimo Traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
// console.log('Vivo', personaje[x]);

// console.log('ultima pelicula:', personaje.ultima_pelicula);

//MAS DETALLES

delete personaje.edad;//Asi borramos datos de un objeto

const entriesPares = Object.entries( personaje );//Pares de valores
// console.log(entriesPares);

personaje.casado = true;//asi agregamos un nuevo dato al objeto

Object.freeze( personaje );

let congelado = Object.isFrozen( personaje );
console.log(congelado);

personaje.dinero = 1000000;
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);

