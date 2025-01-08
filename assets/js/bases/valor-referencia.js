
let a = 5;
let b = a;
a = 10;

console.log({a,b});

//EN JS todos los objetos son pasados por referencia
let juan = { nombre: 'Juan'};
let ana = {...juan}; //spread se utiliza cuando se vaya a hacer una copia de un objeto, para evitar modificar el mismo especio en memoria, fuera de un arrgumento significa, separa los elemtnos

ana.nombre = 'ana';

console.log({juan, ana});

//en este caso como argunto tambien se pueden usar los ... pero como argumento se convierte en un rest que funciona diferente
const cambiaNombre = ({...persona}) =>{ //asi se puede hacer uso del spread en un argumento para romper la relacion
    persona.nombre = 'tony';
    return persona;
}

let peter = { nombre: 'peter'};
let tony = cambiaNombre(peter);
console.log({peter, tony});

//Arreglos

const frutas = ['manzanas', 'peras', 'uvas'];
const otrasFrutas = [...frutas];//asi romperiamos la referencia

otrasFrutas.push('mango');

console.table({frutas, otrasFrutas});

const frutas2 = ['manzanas', 'peras', 'uvas'];
const otrasFrutas2 = frutas2.slice();//asi romperiamos la referencia generando un nuevo arreglo

otrasFrutas2.push('mango');

console.table({frutas2, otrasFrutas2});