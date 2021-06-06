interface Asset{
    x, y , width, height: number;
    getCoords(): string;
}

class Hero implements Asset{
      x:number; y:number; width:number; height: number;
      
      
      getCoords():string{
          return '';
      }
}

let hero:Asset = new Hero();

class Bullet implements Asset{
      x:number; y:number; width:number; height: number;
      
      
      getCoords():string{
          return '';
      }
}

class Enemy implements Asset{
      x:number; y:number; width:number; height: number;
      
      
      getCoords():string{
          return '';
      }
}

class Collision{
    static check(obj: Asset, obj2: Asset){

    }
}


