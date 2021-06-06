
class ToDO{
    
    title:string;
    done:boolean;
    id: number;

    constructor(title:string, done:boolean, id: number){
        this.title = title;
        this.done = done;
        this.id = id;
    }

    TaskCompleted(done:boolean) :boolean {
        return this.done = done;
    }

    changeTitle(title: string):string{
        return this.title = title;
    }

    getID(){
        return this.id;
    }

    log(){
        console.log('Hey guys');
        
    }

}

class Notes extends ToDO{

    constructor(title: string, done:boolean, id: number){
        super(title, done, id);

        console.log('Note created');
    }
    
    
    log(){
        
        //Log de la clase padre
        super.log();

        //Log sobreescrito
        console.log('Hello guys');
        
    }

}


const task = new Notes('Task 1', false, 12321);

console.log(task);
console.log(12132);