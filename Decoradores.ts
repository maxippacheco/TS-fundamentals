
// function Auditable( clsProto:any, methodName: string, descriptor?:any ) {
//     // console.log('Soy un decorador en ejecucion');
//     // clsProto.className = clsProto.constructor.name;
//     // console.log(propertyName);
//     let originalFunction = clsProto[methodName];

//     let decoratedFunction = function(){
//         originalFunction();
//         console.log(`La function ${methodName} fue ejecutada`);
        
//         descriptor.value = decoratedFunction;

//         return descriptor;
        
//     }

// }

// // function DecoradorStatic( cls: Function, propertyName: string ){}


// class Speaker{ 

//     OldN() {
//         console.log(20);
        
//     }

//     @Auditable n( @Ejemplo n:number ) {
//         console.log(20);
        
//     }
//     // @Decorador
//     // numero: number; 
// }


// let speaker: Speaker = new Speaker();

// console.log((speaker as any).className);


// speaker.n();