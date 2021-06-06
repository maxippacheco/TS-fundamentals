
class Video{
    //protected title:string;
    public _title:string;
    // private title:string;
    
    constructor(title:string){
        this._title = title;
    }

    get getTitle(): string{ return this._title}
    set setTitle(title: string) {  this._title = title; }

}

const miVideo = new Video('Video');

console.log(miVideo.getTitle);

miVideo.setTitle = 'Nuevo Titulo';
