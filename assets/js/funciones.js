//FUNCIONES

function saludar( nombre) {
    console.log('Hola ' + nombre);
}

const saludar2 = function( nombre ){
    console.log('hola ' + nombre);
}

const saludar3 = (nombre) => {
    console.log('Hola ' + nombre)
}


saludar('Dani');
saludar2('Joseda');
saludar3('Maria');
