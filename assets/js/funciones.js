//FUNCIONES

function saludar( nombre) {
    // console.log('Hola ' + nombre);
    return [1,2];
}

const saludar2 = function( nombre ){
    console.log('hola ' + nombre);
}

const saludar3 = (nombre) => {
    console.log('Hola ' + nombre)
}


const retornoSaludar = saludar('Dani');

// saludar2('Joseda');
// saludar3('Maria');

function sumar (a,b){
    return a + b;
};

console.log( sumar(40,2) );

const sumar2 = (a,b) =>{
    return a + b;
};

console.log( sumar2(20,30) );

const sumar3 = (a,b) => a + b;//asi se puede hacer siempre y cuanto se quiere ejecutar el mismo return

console.log( sumar3(60,30) );

function getAleatorio(){
    return Math.random();
}

console.log( getAleatorio() );

const getAleatorio2 = () => {
    return Math.random();
}

console.log( getAleatorio2() );

const getAleatorio3 = () => Math.random();

console.log( getAleatorio3() );