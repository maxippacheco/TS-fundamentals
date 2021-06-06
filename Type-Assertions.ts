
class User2{
    name:string;
}

class Admin2{
    permission:boolean;

    getUserPermission(): string{
        return "These are the permissions";
    }
}


let user3 : User2 & Admin2;

user3.permission = false;
user3.name = 'Tomas';
user3.getUserPermission();

;

//Type Assertions

//Lo entiende como un user y admin porque lo estamos declarando
user3 = new User2() as User2&Admin2;

interface AJAXsettings{
    url: string;
}

//Le hicimos saber a typescript que este objeto es de tipo AJAXsettings es util para asignarle valores a objetos que eran de otro tipo
let options = {} as AJAXsettings;

options.url = 'https://api.com'