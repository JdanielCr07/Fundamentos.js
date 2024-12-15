//ESTAS FUNCIONES SOLO FUNCIONAN EN EL NAVEGADOR, PORQUE SON FUNCIONES DEL OBJETO WINDOWS, POR LO QUE SI LO EJECUTAMOS EN EL SERVIDOR NO VA A SERVIR

alert('Hola mundo'); //Indica una alerta, hazta que no des ok, no descongela la pag

let nombre = prompt('Indica tu nombre: ');//prompt sirve para pedir al usuario que ingrese datos
console.log(nombre);
console.log('***' + nombre + '***');

const seleccion = confirm('Estas seguro de borrar?'); //Nos muestrea una ventana para indicar si o no, trabaja con boolean
console.log(seleccion);

// console.log(global);