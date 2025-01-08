const regresaTrue = () =>{
    console.log('Regresa true');
    return true;
}

const regresaFalse = () =>{
    console.log('Regresa false');
    return false;
}

console.warn('not o la negacion')
console.log(true);
console.log(!true);
console.log(!false);

console.log( !regresaFalse() ); //true

console.warn('and') //va a resultar true si todos los valores son verdaderos
console.log( true && true); //true
console.log(true && false);//false
console.log(true && !false);//true

console.log( regresaFalse() && regresaTrue() );
console.log( regresaTrue() && regresaFalse() );
console.log('4 condiciones', true && true && true && false);//false

console.log('------- && -------')
regresaTrue() && regresaFalse();

console.warn('OR') //va a resultar true si AL MENOS UNA CONDICION ES TRUE
console.log(true || false);//TRUE
console.log(false || false);//false

console.log( regresaTrue() || regresaFalse() );
console.log( regresaFalse() || regresaTrue() );

console.log('4 condiciones', true || true || true || false);//true

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = false && 'hola mundo' && 150;
const a2 = 'hola' && 'mundo' && soyFalse && true;
const a3 = soyFalse || 'ya no soy false';
const a4 = soyFalse || soyNull || soyUndefined || 'ya no soy false de nuevo' || true;
const a5 = soyFalse || soyUndefined || regresaTrue() || 'ya no soy false de nuevo' || true;

console.log({a1, a2, a3, a4, a5});

if ( regresaTrue() && regresaFalse() && ( true || false || true ) ){
    console.log('hacer algo');
}else{
    console.log('hacer otra cosa');
}