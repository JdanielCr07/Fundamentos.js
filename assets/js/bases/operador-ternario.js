/** 
 * Dias de la semana abrimos a las 11
 * Fines de semana abrimos a las 9
 */

//Entra a un sitio web, para consultar si esta abierto hoy

const dia = 0;
const horaActual = 10;

let horaApertura;
let mensaje;

// if ( dia === 0 || dia === 6 ){
// if ( [0,6].includes( dia )){
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Dia de semana');
//     horaApertura = 11;
// }
horaApertura = ([0,6].includes( dia )) ? 9 : 11;//misma condicion con operador ternario

// if ( horaActual >= horaApertura ){
//     mensaje = "Esta abierto";
// }else{
//     mensaje = `Esta cerrado, Hoy abrimos a las ${horaApertura}`;
// }
mensaje = ( horaActual >= horaApertura ) ? `Esta abierto` : `Esta cerrado, Hoy abrimos a las ${horaApertura}`;//misma condicion con operador ternario

console.log({horaApertura, mensaje});