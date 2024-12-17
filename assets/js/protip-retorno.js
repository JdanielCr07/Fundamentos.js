//ProTips


function crearPersona( nombre, apellido ) {
    return {
        //  nombre: nombre, Como el nombre del argumento es el mismo que el de la propiedad podemos escribir solo uno y js lo entendera
        //  apellido: apellido
        nombre,
        apellido
    };
};

// const crearPersona = ( nombre, apellido ) => {
//     return {
//         nombre, 
//         apellido
//     }
// }

// const crearPersona = ( nombre, apellido ) => ({nombre, apellido});


// const persona = crearPersona('Jose', 'Castro');
// console.log( persona );

function imprimeArgumentos () {
    console.log( arguments );
}

imprimeArgumentos(10, true, false, ' jose', 'hola');

const imprimeArgumentos2 = ( edad ,...arg) => { //En caso de neceistar utilizar todos los argumentos teniendo funcion de flecha utilizamos el parametro rest, para que se cree un arreglo con cada uno de los argumentos pasados
    // console.log( {edad ,arg} );
    return arg;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, ' jose', 'hola'); //Asi tambien la podemos crear, alli lo que hacemos es asignar el nombre de la variable, a cada argumento,
console.log({casado, vivo, nombre, saludo});

const {apellido} = crearPersona('jose','Castro'); //tambien se puede hacer con objetos
console.log({apellido})


let tony = {
    nombre: 'tony Stark',
    codeName: 'Ironman',
    vivo: false,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) =>{ 
//     console.log('nombre:', personaje.nombre );
//     console.log('codName:', personaje.codeName );
//     console.log('Vivo:', personaje.vivo );
//     console.log('trajes', personaje.trajes );

// }

const imprimePropiedades = ({nombre, codeName, vivo, trajes}) =>{
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({trajes});

}

imprimePropiedades(tony);
