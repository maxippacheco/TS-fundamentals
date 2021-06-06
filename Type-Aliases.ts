
//Sirve bastante para tipos de union y funciones

//Alias o apodo para un tipo existente
type numero = number;

let edad: numero;

edad = 20;

type numOrString = number | string;

let age:numOrString;


class User{
    name:string;
}

class Admin{
    permission:boolean;

    getUserPermission(): string{
        return "These are the permissions";
    }
}


type userAdmin = User & Admin;



let user: userAdmin;


type FuncString = () => string;

function executor(f: FuncString) {
}

executor(() => '1231232');