//datos primitivos
//Existen 6 tipos de datos primitivos: string, number, boolean, null, undefined y symbol.

//STRING

let nombre = ('Peter parker');
console.log( nombre );

nombre = 'ben Parker';
console.log(nombre);

console.log( typeof nombre); //typeof: permite ver el tipo de dato

nombre = 30;

console.log( typeof nombre); 

//NUMBER

let esMarvel = 33.3;
console.log(esMarvel);
console.log(typeof esMarvel);

esMarvel = 30;
console.log(esMarvel);
console.log(typeof esMarvel);

//BOOLEAN

let nuevoBolean = true;
console.log(nuevoBolean);
console.log(typeof nuevoBolean);

nuevoBolean = false;
console.log(nuevoBolean);
console.log(typeof nuevoBolean);

//UNDEFINED

let marvel;
console.log(marvel);
console.log(typeof marvel);

//NULL

let otraVar = null;
console.log(otraVar);
console.log(typeof otraVar);

//SYMBOL

let superHeroe = Symbol('a');
let superHeroe1 = Symbol('a');

console.log(superHeroe);
console.log(typeof superHeroe);
console.log(superHeroe1);
console.log(typeof superHeroe1);

console.log(superHeroe === superHeroe1);