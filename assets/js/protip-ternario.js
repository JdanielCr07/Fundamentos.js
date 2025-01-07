const elMayor = ( a , b ) =>{
    return ( a > b ) ? a : b;
}

console.log(elMayor(20,15));

const elMayor1 = ( a , b ) => ( a > b ) ? a : b;//como solo presenta una sola condicion podemos quitar el return asi simplificacmos

console.log(elMayor1(30,15));

const tieneMembresia = (miembro) => (miembro) ? '2 Dolares' : '10 dolares';

console.log(tieneMembresia(false));

const amigo = true;
const amigos = [
    'peter',
    'tony',
    'Dr.Strange',
    amigo ? 'thor' : 'loki',
    elMayor(10,220)
]

console.log(amigos);

const nota = 100; //a+ a b b+
const grado = nota >= 95 ? 'a+' :
              nota >= 90 ? 'a'  :
              nota >= 85 ? 'b+' :
              nota >= 80 ? 'b'  :
              nota >= 75 ? 'c+' :
              nota >= 70 ? 'c'  : 'f'

console.log({nota, grado});

