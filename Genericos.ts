
//T = representacion del generico
function genericReceptor<T>(obj: T){
    return obj;
};


//Obj debe de ser string
let cadena = genericReceptor<string>("Pedro");
let numero = genericReceptor<number>(20);

// numero = "Hola";

function printAll<K>(arr: K[]){
    console.log(arr.length);
}

printAll<string>(['Hola', 'mundo']);
printAll<number>([1, 2]);
printAll<boolean>([true]);


class Printer<K>{
    printAll(arr: K[]){
        console.log(arr.length);
        
    }
}

let printer: Printer<number> = new Printer();

printer.printAll([12, 4])