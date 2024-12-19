let a = 8;

if (a >= 10 ) { //Como argumentos siempre se pasan valores boolean
    console.log('A es mayor o igual a 10');   
}else{
    console.log('a es menor a 10');
}

// console.log('Fin de programa');

const hoy = new Date();//nos da informacion de hora-fecha
let dia = hoy.getDay();//funciona: 0=domigno, 1=lunes, 2=martes, 3=miecoles...

console.log({dia});

if (dia === 0) {
    console.log('Es domingo');   
}else if(dia === 1){
    console.log('Hoy es lunes');
    // if (dia === 1) {    
    //     console.log('Hoy es lunes');         
    // }
    // else{
    //     console.log('Hoy no es lunes ni domingo');
    // }
}else if(dia === 2){
    console.log('Martes');
}else{
    console.log('hoy no es domingo, lunes o martes');
};

//Sin usar IF else, o switch, unicamente objetos
dia = 6;//0:Domingo, 1: lunes...

const diasLetras = {
    0 : 'domingo',
    1 : 'lunes',
    2 : 'martes',
    3 : 'miercoles',
    4 : 'jueves',
    5 : 'viernes',
    6 : 'sabado'
}

console.log(diasLetras[dia]);

const diasLetras2 = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']

console.log(diasLetras2[dia]);

//Dia de la semana
