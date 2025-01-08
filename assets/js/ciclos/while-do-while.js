const carros = ['ford', 'toyota', 'honda', 'chevrolet'];

let i = 0;

// while ( i < carros.length ) {
//     // if (i === 1){
//     //     // break;
//     //     i++;
//     //     continue;
//     // }
//     console.log(carros[i]);
//     i++;
// }
console.warn('while');

while ( carros[i] ) {//este ciclo while tambien funciona aca porque como el arreglo carros solo tiene 4 elementos, el ciclo al buscar el 5 elemento ya consigue es undefined que se interpretaria como falso, ya que para que un ciclo while se ejecute la condicion debe ser verdadera
    console.log(carros[i]);
    i++;
}

console.warn('do while');
let j = 0;

do {
    console.log(carros[j])
    j++;
} while ( j < carros.length);