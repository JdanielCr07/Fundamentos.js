//PROPIEDADES Y METODOS BASICOS
//METODOS: SON FUNCIONES DENTRO DE LOS ARREGLOS
//PROPIEDADES: COMO UNA VARIABLE QUE VIENE DENTRO

// let juegos = ['selda', 'mario', 'metroid', 'chrono'];
// console.log('largo:', juegos.length);

// let primero = juegos[0];
// let ultimo = juegos[ juegos.length - 1 ];
// console.log({primero, ultimo});

// //metodos

// juegos.forEach((elemento, indice, arr)=>{//recorre cada elemento del arreglo
//     console.log({elemento, indice, arr})
// })

// let nuevaLongitud = juegos.push('F-ZerO');//asi agregamos un nuevo elemento al final del arreglo
// console.log({nuevaLongitud, juegos});

// nuevaLongitud = juegos.unshift('Nintendo');//asi agregamos un nuevo elemento al inicio del arreglo
// console.log({nuevaLongitud, juegos});

// let juegoBorrado = juegos.pop();//Asi borramos el ultimo elemento de nuestro array
// console.log({juegoBorrado, juegos});

// let pos = 1;

// console.log({juegos});
// let juegosBorrados = juegos.splice( pos, 2);//borramos indicando numero de inicio y cuantos elementos eliminara
// console.log({juegosBorrados, juegos});

// let metroidIndex = juegos.indexOf('metroid');//Asi buscamos dentro de un arreglo un elemento en especifico
// console.log({metroidIndex});


let jugadores = ['messi', 'cristiano', 'neymar', 'bale'];
console.log('largo:', jugadores.length);

//propiedad

let primero = jugadores[0];
let ultimo = jugadores[jugadores.length - 1];
console.log({primero, ultimo});


//metodos

jugadores.forEach((elemento, indice, arr)=>{
    console.log({elemento, indice, arr});
})

let nuevoJugador = jugadores.push('benzema');
console.log({nuevoJugador, jugadores});

nuevoJugador = jugadores.unshift('ronaldinho');
console.log({nuevoJugador, jugadores});

let jugadorBorrado = jugadores.pop();
console.log({jugadorBorrado, jugadores});

let pos = 1;

console.log({jugadores});
let jugadoresBorrados = jugadores.splice(pos, 2);
console.log({jugadoresBorrados, jugadores});

let messiIndex = jugadores.indexOf('messi');
console.log({messiIndex, jugadores});