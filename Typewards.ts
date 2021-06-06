
function isNumber ( obj : number | string): obj is number {
    return typeof obj === 'number';
}

function isString ( obj : number | string): obj is string {
    return typeof obj === 'string';
}

function printAge(age: number | string){

    // O en vez de la funcion usamos typeof
    if (isNumber(age)) {
        //Estamos seguros que el objeto es un numero
    } else{
        //Estamos seguros que el objeto es un string
    }    
}