
//Las clases abstractas no se pueden instanciar ej new Asset()
//Los metodos solo se declaran en las clases hijas
abstract class Asset{
    x:number;
    y:number;
    width:number;
    height:number;
    getCoords(): string {
        return `${this.x}, ${this.y}`
    };

    abstract move(speed: number): boolean;
}

//Usas herencia a si que ojo
class Hero extends Asset{

    move(speed: number){
        return true;
    }

}