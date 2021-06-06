
class User{
    name:string;
}

class Admin{
    permission:boolean;

    getUserPermission(): string{
        return "These are the permissions";
    }
}


let user : User & Admin;

user.permission = false;
user.name = 'Tomas';
user.getUserPermission();

;